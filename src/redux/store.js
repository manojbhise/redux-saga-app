import { combineReducers, legacy_createStore } from "redux";
import myFirstReducer from '../redux/reducer';

const rootReducer = combineReducers({myFirstReducer});
export const store = legacy_createStore(rootReducer);