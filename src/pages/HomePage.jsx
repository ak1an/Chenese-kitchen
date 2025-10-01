import { useSelector } from 'react-redux'
import Alphabet from '../components/Alphabet.jsx'
import Filters from '../components/Filters.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import { t } from '../utils/i18n.js'

export default function HomePage() {
	const items = useSelector(s => s.products.items)
    const lang = useSelector(s => s.ui.language)
	return (
		<section>
			<div className="hero">
				<div className="hero-inner container">
					<h1>Cheneese World</h1>
					<p>{lang==='ru' ? 'Китайская кухня: острое, сладкое и необычное. Попробуйте всё!' : 'Chinese cuisine: spicy, sweet and unusual. Try it all!'}</p>
					<div className="row gap">
                        <a className="btn primary glow" href="#catalog">{t(lang,'catalog')}</a>
                        <a className="btn" href="/favorites">{t(lang,'favorites')}</a>
					</div>
				</div>
			</div>
            <h2 id="catalog">{t(lang,'catalog')}</h2>
			<Filters />
			<Alphabet />
			<ProductGrid items={items} />
		</section>
	)
}


