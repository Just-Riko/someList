import s from './Element.module.css'

let ElementOfList = (props) => {

    return (
        <div className={s.block}>
            <img src={props.info.imageUrl} />
            <div>
                <h3 className={s.h3}>{props.info.name}</h3>
                <p className={s.p}>count: {props.info.count ? props.info.count : 'not available'}</p>
                <p className={s.p}>weight: {props.info.weight ? props.info.weight : 'undefined'}</p>
                <p className={s.p}>size: {props.info.size.width ? props.info.size.width : 'undefined'} x {props.info.size.height ? props.info.size.height : 'undefined'}</p>
                <button onClick={props.delete}>DELETE</button>
            </div>
        </div>
    )
}

export default ElementOfList