import Element from './../Element/element'
import AddElementConteiner from '../AddElement/AddElementConteiner'
import s from './list.module.css'
import React, { useEffect, useState } from 'react'

let List = (props) => {

    let input = React.createRef()

    let [text, setText] = useState('')

    let search = () => {
        setText(input.current.value)
    }

    let [elements, setElements] = useState(props.elements)

    useEffect(() => props.setElementsAction(elements))

    let sortElements = (e) => {
        let count = e.target.value
        if (count == 1) {
            setElements([...elements].sort((a, b) => {
                if (a.name.localeCompare(b.name) == 0) {
                    return b.count - a.count
                }
                else {
                    return a.name.localeCompare(b.name)
                }
            }))
        }
        else if (count == 2) {
            setElements([...elements].sort((a, b) => a.id - b.id))
        }
        else if (count == 3) {
            setElements([...elements].sort((a, b) => {
                if (a.name.localeCompare(b.name) == 0) {
                    return b.count - a.count
                }
                else {
                    return a.name.localeCompare(b.name)
                }
            }).reverse())
        }
    }

    return (
        <div className={s.wrapper}>
            <div>
                <div className={s.header}>
                    <div className={s.input}><input ref={input} onChange={search}></input></div>
                    <form>
                        <select onChange={sortElements}>
                            <option value={1}>alphabetically/by count</option>
                            <option value={2}>by item id</option>
                            <option value={3}>alphabetically (reverse)</option>
                        </select>
                    </form>
                </div>

                {elements.map(i => {
                    if (i.name.toUpperCase().indexOf(text.toUpperCase()) != -1) {
                        return <Element info={i} key={i.id} delete={() => props.deleteAction(i.id)} />
                    }
                })}
            </div>
            <AddElementConteiner />
        </div>
    )
}

export default List