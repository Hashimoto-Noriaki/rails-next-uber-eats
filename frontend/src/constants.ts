export const REQUEST_STATE = {
    INITIAL: 'INITIAL' as 'INITIAL',
    LOADING: 'LOADING' as 'LOADING',
    OK: 'OK' as 'OK',
    ERROR: 'ERROR',
} as const;

export const HTTP_STATUS_CODE = {
    NOT_ACCEPTABLE: 406,
} as const;
