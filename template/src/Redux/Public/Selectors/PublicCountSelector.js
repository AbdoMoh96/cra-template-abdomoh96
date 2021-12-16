import {useSelector} from "react-redux";


const PublicCountSelector = () => {
    return useSelector(state => state.PublicReducers.PublicCountReducer);
}

export default PublicCountSelector;