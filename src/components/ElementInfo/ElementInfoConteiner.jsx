import { connect } from "react-redux"
import ElementInfo from "./ElementInfo"
import {deleteComentAction, addCommentAction} from './../../redux/listReducer'


let mapStateToProps = (state) => {
    return {
        elements: state.list.elements,
    }
}

let mapDispatchToProps = {
    deleteComentAction,
    addCommentAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ElementInfo)