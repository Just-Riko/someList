import Element from './../Element/element'
import AddElementConteiner from '../AddElement/AddElementConteiner'

let List = (props) => {

    return (
        <div>
            <div>
                {props.elements.map(i => {
                    return (
                        <Element info={i} key={i.id} delete={() => props.deleteAction(i.id)} />
                    )
                })}
            </div>
            <AddElementConteiner />
        </div>
    )
}

export default List