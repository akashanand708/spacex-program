import { handleActions } from 'redux-actions';
import { FETCH_PROGRAM } from '../constants/action-types';

var programReducer = handleActions({
    [FETCH_PROGRAM.PENDING]: (state) => {
        return {
            ...state,
            awitingData: true
        };
    },
    [FETCH_PROGRAM.SUCCESS]: (state, action) => {
        return {
            ...state,
            awitingData: false,
            programs: action.payload
        };
    },
    [FETCH_PROGRAM.ERROR]: (state) => {
        return {
            ...state,
            awitingData: false,
        };
    }
}, {
        awitingData: false,
        programs: [],
    });

export {
    programReducer
}
