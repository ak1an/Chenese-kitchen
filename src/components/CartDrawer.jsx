import { useDispatch, useSelector } from 'react-redux'
import { closeCart } from '../store/slices/uiSlice.js'
import { decrementQty, removeFromCart, clearCart } from '../store/slices/cartSlice.js'
import { useState } from 'react'
import { useSelector as useReduxSelector } from 'react-redux'
import CheckoutModal from './CheckoutModal.jsx'
import { t } from '../utils/i18n.js'
import { formatSom } from '../utils/money.js'

export default function CartDrawer(){
	const dispatch = useDispatch()
	const open = useSelector(s => s.ui.isCartOpen)
	const cartItems = useSelector(s => s.cart.items)
	const products = useSelector(s => s.products.items)
	const lang = useSelector(s => s.ui.language)
	const items = cartItems
		.map(ci => {
			const p = products.find(p => p.id === ci.id)
			if (!p) return null
			const name = typeof p.name==='string' ? p.name : p.name[lang]
			return { id: p.id, name, price: p.price, image: p.image, qty: ci.qty }
		})
		.filter(Boolean)
    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)
	const [showCheckout,setShowCheckout] = useState(false)
	const user = useReduxSelector(s => s.user.profile)

	return (
		<div className={open? 'drawer open':'drawer'} onClick={()=>dispatch(closeCart())}>
			<div className="drawer-panel" onClick={e=>e.stopPropagation()}>
                <div className="row between center">
                    <h3>{t(lang,'cart')}</h3>
                    <button className="btn" onClick={()=>dispatch(closeCart())}>{t(lang,'close')}</button>
				</div>
				<div className="cart-list">
					{items.map(i => (
						<div key={i.id} className="cart-item">
							<img src={i.image} alt={i.name} />
							<div className="grow">
								<div className="title">{i.name}</div>
                                <div className="muted">{formatSom(i.price)} × {i.qty}</div>
							</div>
							<div className="row gap">
                                <button className="btn" onClick={()=>dispatch(decrementQty(i.id))}>-</button>
                                <button className="btn" onClick={()=>dispatch(removeFromCart(i.id))}>{lang==='ru'?'Удалить':'Remove'}</button>
							</div>
						</div>
					))}
                    {items.length===0 && <div className="muted">{t(lang,'empty')}</div>}
				</div>
				<div className="row between center total">
                    <b>{t(lang,'total')}: {formatSom(total)}</b>
					<div className="row gap">
                        <button className="btn" onClick={()=>dispatch(clearCart())}>{t(lang,'clear')}</button>
						<button className="btn primary glow" onClick={()=>{
                            if(!user){ alert(t(lang,'pleaseLogin')); return }
							setShowCheckout(true)
						}} disabled={!items.length}>Купить</button>
					</div>
				</div>
			</div>
			<CheckoutModal open={showCheckout} onClose={()=>setShowCheckout(false)} />
		</div>
	)
}


