import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function BurgerMenu(){
	const [open,setOpen] = useState(false)
	return (
		<div className="burger">
			<button aria-label="menu" className={open? 'burger-btn open':'burger-btn'} onClick={()=>setOpen(!open)}>
				<span></span><span></span><span></span>
			</button>
			<div className={open? 'burger-panel open':'burger-panel'} onClick={()=>setOpen(false)}>
				<nav className="burger-nav" onClick={e=>e.stopPropagation()}>
					<Link to="/" className="logo row center gap" onClick={()=>setOpen(false)}>
						<img src="https://img.icons8.com/color/48/noodles.png" alt="logo" />
						<b>Cheneese World</b>
					</Link>
					<NavLink to="/" end onClick={()=>setOpen(false)}>Главная</NavLink>
					<NavLink to="/category/food" onClick={()=>setOpen(false)}>Еда</NavLink>
					<NavLink to="/category/sauces" onClick={()=>setOpen(false)}>Соусы</NavLink>
					<NavLink to="/category/drinks" onClick={()=>setOpen(false)}>Напитки</NavLink>
					<NavLink to="/category/icecream" onClick={()=>setOpen(false)}>Мороженное</NavLink>
					<NavLink to="/reviews" onClick={()=>setOpen(false)}>Отзывы</NavLink>
				</nav>
			</div>
		</div>
	)
}






