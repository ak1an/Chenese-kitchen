import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import BurgerMenu from './components/BurgerMenu.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import Toasts from './components/Toasts.jsx'
import HomePage from './pages/HomePage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'
import CartPage from './pages/CartPage.jsx'
import ReviewsPage from './pages/ReviewsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function App() {
	const theme = useSelector(s => s.ui.theme)
    const dispatch = useDispatch()
	useEffect(() => {
		const root = document.documentElement
		root.setAttribute('data-theme', theme)
	}, [theme])
    // removed product images fetch (now each product has a fixed URL from utils)
	return (
		<div className="app">
			<Header />
			<BurgerMenu />
			<CartDrawer />
			<main className="container">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/category/:type" element={<CategoryPage />} />
					<Route path="/product/:id" element={<ProductDetailPage />} />
					<Route path="/favorites" element={<FavoritesPage />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/reviews" element={<ReviewsPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</main>
			<Toasts />
			<Footer />
		</div>
	)
}


