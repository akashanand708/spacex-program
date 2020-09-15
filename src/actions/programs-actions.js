import { FETCH_PROGRAM } from "../constants/action-types";
import * as session from '../endpoints';
import showToastAction from "./show-toast-action";
import { ERROR } from "../constants/message";

export function getSpaceXPrograms(params) {
    return (dispatch) => {
        dispatch({ type: FETCH_PROGRAM.PENDING });
        return session.fetchSpaceProgram(params)
            .then((response) => {
                dispatch({ type: FETCH_PROGRAM.SUCCESS, payload: response });
                return response;
            })
            .catch((error) => {
                dispatch({ type: FETCH_PROGRAM.ERROR });
                dispatch(showToastAction.showToastError({ message: ERROR.FETCH_PROGRAM }))
                return error;
            });
    }
}