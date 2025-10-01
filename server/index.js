// server/index.js
import express from 'express'
import cors from 'cors'
import { Resend } from 'resend'

const app = express()
app.use(cors())
app.use(express.json())

const resend = new Resend(process.env.RESEND_API_KEY)
const codeStore = new Map() // email -> { code, exp }

app.post('/api/auth/request-code', async (req, res) => {
	try{
		const { email } = req.body || {}
		if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
			return res.status(400).json({ error: 'bad email' })
		}
		const code = Math.floor(100000 + Math.random()*900000).toString()
		codeStore.set(email, { code, exp: Date.now() + 10*60*1000 })

		await resend.emails.send({
			from: process.env.RESEND_FROM || 'noreply@resend.dev',
			to: email,
			subject: 'Ваш код входа',
			text: `Код: ${code}`,
		})
		return res.json({ ok: true })
	}catch(err){
		return res.status(500).json({ error: 'send_failed' })
	}
})

app.post('/api/auth/verify-code', (req, res) => {
	const { email, code } = req.body || {}
	const item = codeStore.get(email)
	if(!item || item.exp < Date.now() || item.code !== code){
		return res.status(400).json({ error: 'invalid code' })
	}
	codeStore.delete(email)
	return res.json({ ok: true })
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
