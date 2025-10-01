import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/slices/cartSlice.js'
import { toggleFavorite } from '../store/slices/favoritesSlice.js'
import { addToast, openCart } from '../store/slices/uiSlice.js'
import { safeImage } from '../utils/img.js'
import { t } from '../utils/i18n.js'
import { formatSom } from '../utils/money.js'

export default function ProductCard({ product }) {
	const dispatch = useDispatch()
	const isFav = useSelector(s => s.favorites.ids.includes(product.id))
	const lang = useSelector(s => s.ui.language)
	const name = typeof product.name === 'string' ? product.name : product.name[lang]

	return (
		<div className="card">
			<Link to={`/product/${product.id}`} className="thumb">
				<img
					src={safeImage(product.image)}
					alt={name}
					onError={(e)=>{
						const imgEl = e.currentTarget
						const original = product.image
						// if currently proxied -> try original once; else -> try proxied; else -> placeholder
						if (imgEl.dataset.fallback !== 'original' && !original?.startsWith('https://images.weserv.nl/?url=')){
							imgEl.dataset.fallback = 'original'
							imgEl.src = original
						} else if (imgEl.dataset.fallback !== 'proxy'){
							imgEl.dataset.fallback = 'proxy'
							imgEl.src = safeImage(original)
						} else {
							imgEl.src = 'https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/6/6f/Chinese_cuisine_sample.jpg&w=800&h=600&fit=cover'
						}
					}}
				/>
			</Link>
			<div className="card-body">
				<Link to={`/product/${product.id}`} className="card-title">{name}</Link>
				<div className="muted">{product.type} • {product.category}</div>
				<div className="row between center">
					<div className="price">{formatSom(product.price)}</div>
					<div className="row gap">
						<button className={isFav ? 'btn fav active' : 'btn fav'} onClick={() => {dispatch(toggleFavorite(product.id));dispatch(addToast(t(lang,'addedToFavorites')))}}>❤</button>
						<button className="btn primary" onClick={() => {dispatch(addToCart(product.id));dispatch(addToast(t(lang,'addedToCart')));dispatch(openCart())}}>{t(lang,'addToCart')}</button>
					</div>
				</div>
			</div>
		</div>
	)
}


