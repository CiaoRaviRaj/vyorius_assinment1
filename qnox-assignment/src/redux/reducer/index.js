import tasks from "./task";

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    tasks,
});

export default rootReducer;