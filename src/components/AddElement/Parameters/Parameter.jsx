import { useState } from 'react'

let Parameter = (props) => {
    const [input, setInput] = useState(props.newElement[props.header])
    let inputChange = (e) => {
        setInput(e.target.value)
        props.newElementChangeAction(props.header, e.target.value)
    }

    return (<>
        <span>{props.header}:</span>
        <input type="text" style={{width: '200px'}} value={props.newElement[props.header]} onChange={inputChange} />
    </>)
}

export default Parameter