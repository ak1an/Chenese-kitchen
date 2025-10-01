import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setType } from '../store/slices/filtersSlice.js'
import { t } from '../utils/i18n.js'

export default function Filters() {
	const dispatch = useDispatch()
    const { category, type } = useSelector(s => s.filters)
    const lang = useSelector(s => s.ui.language)

	return (
        <div className="filters row gap wrap">
			<div className="group">
                <span className="label">{lang==='ru'?'Категории:':'Categories:'}</span>
                <button className={category==='all'?'chip active':'chip'} onClick={()=>dispatch(setCategory('all'))}>{lang==='ru'?'Все':'All'}</button>
                <button className={category==='spicy'?'chip active':'chip'} onClick={()=>dispatch(setCategory('spicy'))}>{lang==='ru'?'Острые':'Spicy'}</button>
                <button className={category==='sweet'?'chip active':'chip'} onClick={()=>dispatch(setCategory('sweet'))}>{lang==='ru'?'Сладкие':'Sweet'}</button>
                <button className={category==='unusual'?'chip active':'chip'} onClick={()=>dispatch(setCategory('unusual'))}>{lang==='ru'?'Необычные':'Unusual'}</button>
			</div>
			<div className="group">
                <span className="label">{lang==='ru'?'Тип:':'Type:'}</span>
                <button className={type==='all'?'chip active':'chip'} onClick={()=>dispatch(setType('all'))}>{lang==='ru'?'Все':'All'}</button>
                <button className={type==='food'?'chip active':'chip'} onClick={()=>dispatch(setType('food'))}>{t(lang,'food')}</button>
                <button className={type==='sauces'?'chip active':'chip'} onClick={()=>dispatch(setType('sauces'))}>{t(lang,'sauces')}</button>
                <button className={type==='drinks'?'chip active':'chip'} onClick={()=>dispatch(setType('drinks'))}>{t(lang,'drinks')}</button>
                <button className={type==='icecream'?'chip active':'chip'} onClick={()=>dispatch(setType('icecream'))}>{t(lang,'icecream')}</button>
			</div>
		</div>
	)
}






