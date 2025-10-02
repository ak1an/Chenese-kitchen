import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setType } from '../store/slices/filtersSlice.js'
import Alphabet from '../components/Alphabet.jsx'
import Filters from '../components/Filters.jsx'
import ProductGrid from '../components/ProductGrid.jsx'

export default function CategoryPage() {
	const { type } = useParams()
	const dispatch = useDispatch()
	const items = useSelector(s => s.products.items)

	useEffect(() => { dispatch(setType(type)) }, [type, dispatch])

	return (
		<section>
			<h1>Категория: {type}</h1>
			<Filters />
			<Alphabet />
			<ProductGrid items={items} />
		</section>
	)
}







