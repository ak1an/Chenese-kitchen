import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard.jsx'

export default function FavoritesPage() {
	const ids = useSelector(s => s.favorites.ids)
	const products = useSelector(s => s.products.items.filter(p => ids.includes(p.id)))

	return (
		<section>
			<h1>Избранное</h1>
			{products.length === 0 ? (
				<div className="muted">Пусто</div>
			) : (
				<div className="grid">
					{products.map(p => <ProductCard key={p.id} product={p} />)}
				</div>
			)}
		</section>
	)
}


