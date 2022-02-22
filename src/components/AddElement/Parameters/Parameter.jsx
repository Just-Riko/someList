import { useState } from 'react'
import s from './parameter.module.css'

let Parameter = (props) => {
    const [input, setInput] = useState(props.newElement[props.header])
    let inputChange = (e) => {
        setInput(e.target.value)
        props.newElementChangeAction(props.header, e.target.value)
    }

    return (<li className={s.li}>
        <span className={s.span}>{props.header}:</span>
        <input type="text" className={s.input} value={props.newElement[props.header]} onChange={inputChange} />
    </li>)
}

export default Parameter