import { createStore ,  combineReducers } from "redux";
import PublicReducers from '../Public/Reducers/PublicReducers'
import HomePageReducers from "../HomePage/Reducers/HomePageReducers";


const Reducers = combineReducers({
    PublicReducers,
    HomePageReducers
});

/* for development */
const Store = createStore(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/*for production*/
/*const Store = createStore(Reducers);*/

export default Store;