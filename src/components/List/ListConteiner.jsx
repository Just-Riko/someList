import { connect } from "react-redux";
import List from "./list";
import { deleteAction, setElementsAction, sortAction } from '../../redux/listReducer'

let mapStateToProps = (state) => {
    return {
        elements: state.list.elements
    }
}

let mapDispatchToProps = {
    deleteAction,
    setElementsAction,
    sortAction
}

export default connect(mapStateToProps, mapDispatchToProps)(List)