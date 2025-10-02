import { useDispatch, useSelector } from 'react-redux'
import { closeCart } from '../store/slices/uiSlice.js'
import { clearCart } from '../store/slices/cartSlice.js'
import { useState } from 'react'

export default function CheckoutModal({ open, onClose }){
	const dispatch = useDispatch()
	const [name,setName] = useState('')
	const [card,setCard] = useState('')
	const [exp,setExp] = useState('')
	const [cvc,setCvc] = useState('')
	const [processing,setProcessing] = useState(false)
	const cartItems = useSelector(s => s.cart.items)
	const products = useSelector(s => s.products.items)
	const items = cartItems.map(ci => ({...products.find(p=>p.id===ci.id), qty:ci.qty})).filter(Boolean)
	const total = items.reduce((sum,i)=>sum+i.price*i.qty,0)

	function formatCard(v){ return v.replace(/[^0-9]/g,'').slice(0,16).replace(/(.{4})/g,'$1 ').trim() }
	function formatExp(v){ return v.replace(/[^0-9]/g,'').slice(0,4).replace(/^(\d{2})(\d{0,2}).*/,'$1/$2') }
	function formatCvc(v){ return v.replace(/[^0-9]/g,'').slice(0,4) }

	async function pay(e){
		e.preventDefault()
		if (!name || card.replace(/\s/g,'').length<16 || exp.length<5 || cvc.length<3) return
		setProcessing(true)
		await new Promise(r=>setTimeout(r,1200))
		setProcessing(false)
		alert('Оплата прошла успешно!')
		dispatch(clearCart())
		onClose(); dispatch(closeCart())
	}

	return (
		<div className={open? 'modal open':'modal'} onClick={onClose}>
			<div className="modal-card" onClick={e=>e.stopPropagation()}>
				<h3>Оплата — ${total.toFixed(2)}</h3>
				<form onSubmit={pay} className="col gap">
					<input className="search" placeholder="Имя на карте" value={name} onChange={e=>setName(e.target.value)} />
					<input className="search" placeholder="Номер карты" value={card} onChange={e=>setCard(formatCard(e.target.value))} />
					<div className="row gap">
						<input className="search" placeholder="MM/YY" value={exp} onChange={e=>setExp(formatExp(e.target.value))} />
						<input className="search" placeholder="CVC" value={cvc} onChange={e=>setCvc(formatCvc(e.target.value))} />
					</div>
					<button className="btn primary glow" type="submit" disabled={processing}>{processing?'Обработка...':'Купить'}</button>
				</form>
			</div>
		</div>
	)
}







