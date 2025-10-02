import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addReview } from '../store/slices/reviewsSlice.js'

export default function ReviewsPage(){
	const dispatch = useDispatch()
	const reviews = useSelector(s => s.reviews.items)
	const [name,setName] = useState('')
	const [rating,setRating] = useState(5)
	const [text,setText] = useState('')

	function submit(e){
		e.preventDefault()
		if(!name.trim() || !text.trim()) return
		dispatch(addReview(name.trim(), Number(rating), text.trim()))
		setName(''); setRating(5); setText('')
	}

	return (
		<section>
			<h1>Отзывы</h1>
			<form className="card" onSubmit={submit} style={{padding:12,gap:8}}>
				<input className="search" placeholder="Ваше имя" value={name} onChange={e=>setName(e.target.value)} />
				<select className="search" value={rating} onChange={e=>setRating(e.target.value)}>
					<option value={5}>5</option>
					<option value={4}>4</option>
					<option value={3}>3</option>
					<option value={2}>2</option>
					<option value={1}>1</option>
				</select>
				<textarea className="search" placeholder="Ваш отзыв" value={text} onChange={e=>setText(e.target.value)} rows={4} />
				<button className="btn primary glow" type="submit">Отправить</button>
			</form>
			<div className="grid">
				{reviews.map(r => (
					<div className="card" key={r.id}>
						<div className="card-body">
							<div className="row between center">
								<b>{r.name}</b>
								<span className="muted">{new Date(r.createdAt).toLocaleDateString()}</span>
							</div>
							<div>Оценка: {r.rating}/5</div>
							<p className="muted">{r.text}</p>
						</div>
					</div>
				))}
				{reviews.length===0 && <div className="muted">Пока нет отзывов</div>}
			</div>
		</section>
	)
}







