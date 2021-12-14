import { Dispatch } from "redux";
import { Action } from "./Actions";

export const codeUpdate = (code: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: "update",
            payload: code
        });
    }
}

export const codeOutput = (code: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: "output"
        });
    }
}