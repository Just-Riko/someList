import s from './add.module.css'
import ParametersConteiner from './Parameters/ParametersConteiner'

let AddElement = (props) => {

    return (
        <div>
            <button onClick={props.modalToggleAction} className={s.addElement}>Add element</button>
            {props.modal
                ? <div className={s.bodyBlock}><div className={s.body}></div>
                    <div className={s.modal}>
                        <div className={s.header}><h3>Add Element</h3><span onClick={props.modalToggleAction}>&#9747;</span></div>

                        <div className={s.block}>
                            <ul className={s.list}>
                                {props.parameters.map((i, ind) => <ParametersConteiner header={i} key={ind} />)}
                            </ul>

                        </div>
                        <div className={s.buttonsBlock}><button onClick={props.addAction} style={{ marginRight: '20px' }}>Add</button><button onClick={props.modalToggleAction}>Cansel</button></div>
                    </div>
                </div>
                : null}
                {props.warning 
                ? <div className={s.warningBlock}><div className={s.warning}><h2>" You shouldn`t be able to add an
                empty product without setting data for him"</h2>
                <h2 className={s.okButton} onClick={props.warningAction}>OK</h2></div></div>
                : null}
        </div>
    )
}

export default AddElement