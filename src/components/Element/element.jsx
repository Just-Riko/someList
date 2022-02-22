import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Element.module.css'

let Element = (props) => {

    let [modal, setModal] = useState(false)

    return (
        <div className={s.block}>
            <NavLink to={`/${props.info.id}`} className={s.link}><img src={props.info.imageUrl} /></NavLink>
            <div>
                <NavLink to={`/${props.info.id}`} className={s.link}><h3 className={s.h3}>{props.info.name}</h3></NavLink>
                <p className={s.p}>count: {props.info.count ? props.info.count : 'not available'}</p>
                <p className={s.p}>weight: {props.info.weight ? props.info.weight : 'undefined'}</p>
                <p className={s.p}>size: {props.info.size.width ? props.info.size.width : 'undefined'} x {props.info.size.height ? props.info.size.height : 'undefined'}</p>
                <button onClick={() => { setModal(!modal) }}>DELETE</button>
                {modal
                    ? <div className={s.modalBlock}>
                        <div className={s.modal}>
                            <h3>Delete this item?</h3>
                            <button onClick={props.delete}>Confirm</button><button onClick={() => setModal(!modal)}>Cansel</button>
                        </div>
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default Element