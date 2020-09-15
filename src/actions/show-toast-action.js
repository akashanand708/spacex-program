import { SHOW_TOAST, HIDE_TOAST } from '../constants/action-types';

export default {
    showToastInfo: (toast) => {
        toast.type = 'info';
        return getToastAction(toast);
    },
    showToastSuccess: (toast) => {
        toast.type = 'success';
        return getToastAction(toast);
    },
    showToastWarning: (toast) => {
        toast.type = 'warning';
        return getToastAction(toast);
    },
    showToastError: (toast) => {
        toast.type = 'danger';
        return getToastAction(toast);
    },
    showToastPrimary: (toast) => {
        toast.type = 'primary';
        return getToastAction(toast);
    },
    hideToast: () => {
        return {
            type: HIDE_TOAST
        };
    }
};

const getToastAction = (toast) => {
    return {
        type: SHOW_TOAST,
        payload: toast
    }
}