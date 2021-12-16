import {useSelector} from "react-redux";


const HomeTextSelector = () => {
    return useSelector(state => state.HomePageReducers.HomeTextReducer);
}

export default HomeTextSelector;