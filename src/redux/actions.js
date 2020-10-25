import { HIGHLIGHT_ACCOUNTS, HIGHLIGHT_MANAGERS, INIT_DATA } from './actionTypes';

export const initData = (data) => {
    return {
        type: INIT_DATA,
        data
    }
}

export const highlightManagers = (id) => {
    return {
        type: HIGHLIGHT_MANAGERS,
        id
    }
}

export const highlightAccounts = (id) => {
    return {
        type: HIGHLIGHT_ACCOUNTS,
        id
    }
}
