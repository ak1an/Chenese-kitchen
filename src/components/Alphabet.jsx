import { useDispatch, useSelector } from 'react-redux'
import { setAlphabet } from '../store/slices/filtersSlice.js'

const RU_ALPHABET = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('')
const EN_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function Alphabet() {
	const dispatch = useDispatch()
	const selected = useSelector(s => s.filters.alphabet)
	const lang = useSelector(s => s.ui.language)
	const names = useSelector(s => s.products.items.map(p => typeof p.name === 'string' ? p.name : p.name[lang]))

	const alphabet = lang === 'ru' ? RU_ALPHABET : EN_ALPHABET
	const available = new Set(names.map(n => n?.[0]?.toUpperCase()).filter(Boolean))
	const letters = alphabet.filter(l => available.has(l))

	return (
		<div className="alphabet">
			<button className={selected === '' ? 'chip active' : 'chip'} onClick={() => dispatch(setAlphabet(''))}>{lang==='ru'?'Все':'All'}</button>
			{letters.map(l => (
				<button key={l} className={selected === l ? 'chip active' : 'chip'} onClick={() => dispatch(setAlphabet(l))}>{l}</button>
			))}
		</div>
	)
}


