import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard.jsx'
import { t } from '../utils/i18n.js'

export default function ProductGrid({ items }) {
	const { alphabet, category, type, query } = useSelector(s => s.filters)
	const lang = useSelector(s => s.ui.language)

	const filtered = useMemo(() => {
		let data = items
		if (type !== 'all') data = data.filter(p => p.type === type)
		if (category !== 'all') data = data.filter(p => p.category === category)
		if (alphabet) {
			const letter = alphabet.toLowerCase()
			data = data.filter(p => {
				const n = typeof p.name === 'string' ? p.name : p.name[lang]
				return n?.toLowerCase().startsWith(letter)
			})
		}
		if (query) {
			const q = query.toLowerCase()
			data = data.filter(p => {
				const n = typeof p.name === 'string' ? p.name : p.name[lang]
				return n?.toLowerCase().includes(q)
			})
		}
		return data
	}, [items, alphabet, category, type, query, lang])

	return (
        <div className="grid">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
			{filtered.length === 0 && <div className="muted">{t(lang,'nothingFound')}</div>}
        </div>
    )
}


