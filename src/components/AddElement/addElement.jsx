import s from './add.module.css'
import ParametersConteiner from './Parameters/ParametersConteiner'

let AddElement = (props) => {

    return (
        <div>
            <div>
                <h3>Add Element</h3>
                <div className={s.block}>
                    {props.parameters.map((i, ind) => <ParametersConteiner header={i} key={ind} />)}
                </div>
                <button className={s.button} onClick={props.addAction}>Add</button>
            </div>
        </div>
    )
}

export default AddElement