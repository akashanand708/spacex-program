const asyncActionType = (type) => ({
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`,
  });

  export const FETCH_PROGRAM = asyncActionType('FETCH_PROGRAM');
  export const SHOW_TOAST = 'SHOW_TOAST';
  export const HIDE_TOAST = 'HIDE_TOAST';
  