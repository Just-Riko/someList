import { connect } from "react-redux"
import AddElement from "./addElement"
import {addAction} from './../../redux/listReducer'

let mapStateToProps = (state) => ({
    parameters: state.list.parameters,
})

let mapDispatchToProps = {
    addAction
}

export default connect(mapStateToProps, mapDispatchToProps)(AddElement)