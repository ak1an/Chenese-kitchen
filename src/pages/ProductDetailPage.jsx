import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/slices/cartSlice.js'
import { toggleFavorite } from '../store/slices/favoritesSlice.js'
import { safeImage } from '../utils/img.js'
import { t } from '../utils/i18n.js'
import { formatSom } from '../utils/money.js'

export default function ProductDetailPage() {
	const { id } = useParams()
	const dispatch = useDispatch()
	const product = useSelector(s => s.products.items.find(p => p.id === id))
	const isFav = useSelector(s => s.favorites.ids.includes(id))
	const lang = useSelector(s => s.ui.language)
    const name = typeof product?.name === 'string' ? product?.name : product?.name?.[lang]
	const ingredients = Array.isArray(product?.ingredients) ? product?.ingredients : product?.ingredients?.[lang]
    const img = safeImage(product?.image)

    if (!product) return <div>{t(lang,'notFound')}</div>

	return (
		<section className="detail">
			<div className="detail-media"><img src={img} alt={name} onError={(e)=>{
				const el = e.currentTarget
				const original = product?.image
				if (el.dataset.fallback !== 'original' && original){ el.dataset.fallback='original'; el.src = original; }
				else if (el.dataset.fallback !== 'proxy'){ el.dataset.fallback='proxy'; el.src = img; }
				else { el.src = 'https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/6/6f/Chinese_cuisine_sample.jpg&w=800&h=600&fit=cover' }
			}} /></div>
			<div className="detail-body">
				<h1>{name}</h1>
                <div className="muted">{product.type} • {product.category}</div>
                <h3>{t(lang,'ingredients')}</h3>
				<ul>
					{ingredients.map((i) => <li key={i}>{i}</li>)}
				</ul>
				<div className="row gap">
                    <button className={isFav ? 'btn fav active' : 'btn fav'} onClick={() => dispatch(toggleFavorite(product.id))}>❤ {t(lang,'toFavorites')}</button>
                    <button className="btn primary" onClick={() => dispatch(addToCart(product.id))}>{t(lang,'addToCartLong')} — {formatSom(product.price)}</button>
				</div>
			</div>
		</section>
	)
}


