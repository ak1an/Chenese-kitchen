import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { t } from '../utils/i18n.js'

export default function Footer(){
    const lang = useSelector(s => s.ui.language)
    return (
		<footer className="footer">
			<div className="container footer-grid">
				<div>
					<div className="logo">
						<img src="https://img.icons8.com/color/48/noodles.png" alt="logo" />
                        <span>Cheneese World</span>
					</div>
                    <p className="muted">{lang==='ru'?'Острое • Сладкое • Необычное':'Spicy • Sweet • Unusual'}</p>
				</div>
				<nav>
                    <h4>{lang==='ru'?'Навигация':'Navigation'}</h4>
					<ul>
                        <li><Link to="/">{t(lang,'home')}</Link></li>
                        <li><Link to="/category/food">{t(lang,'food')}</Link></li>
                        <li><Link to="/category/sauces">{t(lang,'sauces')}</Link></li>
                        <li><Link to="/category/drinks">{t(lang,'drinks')}</Link></li>
                        <li><Link to="/category/icecream">{t(lang,'icecream')}</Link></li>
					</ul>
				</nav>
				<div>
                    <h4>{lang==='ru'?'Контакты':'Contacts'}</h4>
					<ul>
						<li>Email: hello@cheneese.world</li>
						<li>Тел: +996 555 717 438</li>
					</ul>
				</div>
			</div>
            <div className="container footnote">© {new Date().getFullYear()} Cheneese World</div>
		</footer>
	)
}






