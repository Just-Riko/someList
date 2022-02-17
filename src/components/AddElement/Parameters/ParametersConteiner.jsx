import { connect } from "react-redux"
import {newElementChangeAction} from './../../../redux/listReducer'
import Parameter from "./Parameter"

let mapStateToProps = (state) => ({
    parameters: state.list.parameters,
    newElement: state.list.newElement
})

let mapDispatchToProps = {
    newElementChangeAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Parameter)