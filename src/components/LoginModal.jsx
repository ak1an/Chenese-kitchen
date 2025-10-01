import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { login, logout } from '../store/slices/userSlice.js'

export default function LoginModal({ open, onClose }){
	const dispatch = useDispatch()
    const user = useSelector(s => s.user.profile)
	const [name,setName] = useState('')
	const [email,setEmail] = useState('')
    const [error,setError] = useState('')

    function submit(e){
        e.preventDefault()
        setError('')
        const trimmedEmail = email.trim()
        const trimmedName = name.trim()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!trimmedName){ setError('Введите имя'); return }
        if(!emailRegex.test(trimmedEmail)){ setError('Некорректный email'); return }
        dispatch(login({ name: trimmedName, email: trimmedEmail }))
        onClose()
    }

	return (
		<div className={open? 'modal open':'modal'} onClick={onClose}>
			<div className="modal-card" onClick={e=>e.stopPropagation()}>
				{user ? (
					<div className="col gap">
						<h3>Аккаунт</h3>
						<div className="muted">{user.name} · {user.email}</div>
						<button className="btn" onClick={()=>{dispatch(logout()); onClose()}}>Выйти</button>
					</div>
                ) : (
                    <form onSubmit={submit} className="col gap">
                        <h3>Войти</h3>
                        {error && <div className="muted" style={{color:'#ef4444'}}>{error}</div>}
                        <input className="search" placeholder="Ваше имя" value={name} onChange={e=>setName(e.target.value)} />
                        <input className="search" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
                        <button className="btn primary glow" type="submit">Войти</button>
                    </form>
                )}
			</div>
		</div>
	)
}






