import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
let reducers = combineReducers({
    loginReducer: loginReducer,
});

const rootReducer = (state, action) => {
    return reducers(state, action);
};

export default rootReducer;