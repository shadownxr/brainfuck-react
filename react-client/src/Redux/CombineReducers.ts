import { combineReducers } from "redux";
import CodeReducer from "./CodeReducer";

const reducers = combineReducers({
    code: CodeReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>