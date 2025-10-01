import { useDispatch, useSelector } from 'react-redux'
import { removeToast } from '../store/slices/uiSlice.js'
import { useEffect } from 'react'

export default function Toasts(){
	const dispatch = useDispatch()
	const toasts = useSelector(s => s.ui.toasts)
	useEffect(()=>{
		const timers = toasts.map(t => setTimeout(()=>dispatch(removeToast(t.id)), 2500))
		return ()=> timers.forEach(clearTimeout)
	},[toasts, dispatch])
	return (
		<div className="toasts">
			{toasts.map(t => (
				<div key={t.id} className="toast">{t.message}</div>
			))}
		</div>
	)
}






