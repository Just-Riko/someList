import { connect } from "react-redux";
import List from "./list";
import { deleteAction, setElementsAction} from '../../redux/listReducer'

let mapStateToProps = (state) => {
    return {
        elements: state.list.elements
    }
}

let mapDispatchToProps = {
    deleteAction,
    setElementsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(List)