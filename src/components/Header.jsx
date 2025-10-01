import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage, toggleTheme, openCart } from '../store/slices/uiSlice.js'
import { useState } from 'react'
import LoginModal from './LoginModal.jsx'
import { setQuery } from '../store/slices/filtersSlice.js'
import { t } from '../utils/i18n.js'

export default function Header() {
	const dispatch = useDispatch()
	const cartCount = useSelector(s => s.cart.items.reduce((sum, i) => sum + i.qty, 0))
	const favCount = useSelector(s => s.favorites.ids.length)
	const { language, theme } = useSelector(s => s.ui)
	const user = useSelector(s => s.user.profile)
	const [showLogin,setShowLogin] = useState(false)

	return (
		<header className="header">
			<div className="container header-row">
				<Link to="/" className="logo">
					<img src="https://img.icons8.com/color/48/noodles.png" alt="logo" />
					<span>Cheneese World</span>
				</Link>
				<nav className="nav">
					<NavLink to="/" end>{t(language,'home')}</NavLink>
					<NavLink to="/category/food">{t(language,'food')}</NavLink>
					<NavLink to="/category/sauces">{t(language,'sauces')}</NavLink>
					<NavLink to="/category/drinks">{t(language,'drinks')}</NavLink>
					<NavLink to="/category/icecream">{t(language,'icecream')}</NavLink>
					<NavLink to="/about">{t(language,'about')}</NavLink>
				</nav>
				<div className="actions">
					<input className="search" placeholder={t(language,'search')} onChange={(e)=>dispatch(setQuery(e.target.value))} />
					<div className="badge">
						<button className={language==='ru'?'btn primary':'btn'} onClick={()=>dispatch(setLanguage('ru'))}>Рус</button>
						<button className={language==='en'?'btn primary':'btn'} onClick={()=>dispatch(setLanguage('en'))}>Eng</button>
					</div>
					<button className="badge" onClick={()=>dispatch(toggleTheme())}>
						<b>{theme==='dark'?'🌙':'☀️'}</b>
					</button>
					<Link to="/favorites" className="badge" title={t(language,'favorites')}>
						<span>❤</span>
						<b>{favCount}</b>
					</Link>
					<button className="badge" onClick={()=>dispatch(openCart())} title={t(language,'cart')}>
						<span>🧺</span>
						<b>{cartCount}</b>
					</button>
					<button className="badge" onClick={()=>setShowLogin(true)} title={t(language,'login')}>
						{user? <span>👤</span> : <span>🔑</span>}
					</button>
				</div>
				<LoginModal open={showLogin} onClose={()=>setShowLogin(false)} />
			</div>
		</header>
	)
}


