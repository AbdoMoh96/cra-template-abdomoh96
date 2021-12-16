import { combineReducers } from "redux";
import HomeTextReducer from "./HomeTextReducer";


const HomePageReducers = combineReducers({
    HomeTextReducer: HomeTextReducer
});

export default HomePageReducers;