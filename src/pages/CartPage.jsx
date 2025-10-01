import { useDispatch, useSelector } from 'react-redux'
import { decrementQty, removeFromCart, clearCart } from '../store/slices/cartSlice.js'

export default function CartPage() {
	const dispatch = useDispatch()
	const cartItems = useSelector(s => s.cart.items)
	const products = useSelector(s => s.products.items)
	const lang = useSelector(s => s.ui.language)

	const items = cartItems
		.map(ci => {
			const p = products.find(p => p.id === ci.id)
			if (!p) return null
			const name = typeof p.name === 'string' ? p.name : p.name[lang]
			return { id: p.id, name, price: p.price, image: p.image, qty: ci.qty }
		})
		.filter(Boolean)

	const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

	return (
		<section>
			<h1>Корзина</h1>
			{items.length === 0 ? (
				<div className="muted">Пусто</div>
			) : (
				<div className="cart-list">
					{items.map(i => (
						<div key={i.id} className="cart-item">
							<img src={i.image} alt={i.name} />
							<div className="grow">
							<div className="title">{i.name}</div>
								<div className="muted">${i.price.toFixed(2)} × {i.qty}</div>
							</div>
							<div className="row gap">
								<button className="btn" onClick={() => dispatch(decrementQty(i.id))}>-</button>
								<button className="btn" onClick={() => dispatch(removeFromCart(i.id))}>Удалить</button>
							</div>
						</div>
					))}
					<div className="row between center total">
						<b>Итого: ${total.toFixed(2)}</b>
						<button className="btn" onClick={() => dispatch(clearCart())}>Очистить</button>
					</div>
				</div>
			)}
		</section>
	)
}


