import {combineReducers} from "redux";
import PublicCountReducer from "./PublicCountReducer";
import PublicUserReducer from "./PublicUserReducer";

const PublicReducers = combineReducers({
    PublicCountReducer,
    PublicUserReducer
});


export default PublicReducers;