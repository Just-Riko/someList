import { connect } from "react-redux"
import AddElement from "./addElement"
import {addAction, modalToggleAction, warningAction} from './../../redux/listReducer'

let mapStateToProps = (state) => ({
    parameters: state.list.parameters,
    modal: state.list.addModal,
    warning: state.list.warning
})

let mapDispatchToProps = {
    addAction,
    modalToggleAction,
    warningAction
}

export default connect(mapStateToProps, mapDispatchToProps)(AddElement)