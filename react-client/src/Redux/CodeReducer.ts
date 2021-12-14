import { Action } from "./Actions";

const initialState= "";

const reducer = (state: string = initialState, action: Action) => {
    switch(action.type){
        case "update":
            return state = action.payload;
        case "output":
            return state;
        default:
            return state;
    }
}

export default reducer