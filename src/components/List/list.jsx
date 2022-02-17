import ElementOfList from './../Element/element'
import AddElementConteiner from '../AddElement/AddElementConteiner'
import { useEffect } from 'react'

let List = (props) => {

    useEffect (() => {
        // here could be ajax request
        // props.setElementsAction()
    })

    return (
        <div>
            <div>
                {props.elements.map(i => {
                    return (
                        <ElementOfList info={i} key={i.id} delete={() => props.deleteAction(i.id)} />
                    )
                })}
            </div>
            <AddElementConteiner />
        </div>
    )
}

export default List