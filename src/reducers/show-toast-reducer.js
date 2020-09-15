
import { handleActions } from 'redux-actions';
import { SHOW_TOAST, HIDE_TOAST } from '../constants/action-types';

let showToastReducer = handleActions({
    [SHOW_TOAST]: (state, action) => {
        return {
            ...state,
            showToast: true,
            toastMessage: action.payload
        };

    },
    [HIDE_TOAST]: (state) => {
        return {
            ...state,
            showToast: false,
            toastMessage: ''
        };
    },

},
    {
        showToast: false,
        toastMessage: { message: '' }
    });

export { showToastReducer };
