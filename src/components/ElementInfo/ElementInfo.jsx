import { useState } from "react"
import { useLocation } from "react-router-dom"
import s from './info.module.css'

let ElementInfo = (props) => {

    let location = useLocation().pathname.split('')
    location.shift()

    let element = props.elements.filter(i => i.id == location)[0]

    let [input, setInput] = useState('')

    let onInputChange = (e) => {
        setInput(e.target.value)
    }
    let add = () => {
        props.addCommentAction(input, +location.join(''))
        setInput('')
    }

    return (
        <div className={s.block}>
            <div><h1>{element.name}</h1>
                <img src={element.imageUrl} /></div>
            <div>
                <h4>some info:</h4>
                <p>count: {element.count || 'no info'}</p>
                <p>size: {element.size.width || 'no info'} x {element.size.height || 'no info'}</p>
                <p>weight: {element.weight || 'no info'}</p>
                <h3>Coment Section:</h3>
                <div style={{width: 'fit-content'}}>{element.comments ? element.comments.map(i => <div key={i.id} style={{ border: '1px solid black', borderRadius: '10px', marginBottom: '10px', padding: '5px', fontFamily: "sans-serif" }}>
                    <p>{i.description}</p>
                    <div>{i.date}</div>
                    <button onClick={() => props.deleteComentAction(i.id, +location.join(''))}>delete</button>
                </div>) : 'no comments'}
                <input value={input} onChange={onInputChange}></input>
                <button onClick={add} style={{display: 'block', margin: '0 auto', fontSize: '20px'}}>+</button>
                </div>

            </div>
            <div style={{ paddingTop: '100px' }}>
                here should be some product info, but I think that's no need to add it
            </div>
        </div>
    )
}

export default ElementInfo