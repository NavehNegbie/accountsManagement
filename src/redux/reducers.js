import cloneDeep from 'lodash/cloneDeep';
import forEach from 'lodash/forEach';
import { managers } from '../data';
import { HIGHLIGHT_ACCOUNTS, HIGHLIGHT_MANAGERS, INIT_DATA } from './actionTypes';

const initState = {
    managers: {},
    accountsData: {}
}

export const rootReducer = (state = initState, action) => {
    switch (action.type) {

        case INIT_DATA: 

            return {
                ...state,
                managers: action.data.managers,
                accountsData: action.data.accountsData
            }

        case HIGHLIGHT_MANAGERS:
            const managersCopy = cloneDeep(managers);
            managersCopy[action.id].isHighlight = true;
            findEmployeeTree(action.id, managersCopy);

            return { ...state, managers: managersCopy };

        case HIGHLIGHT_ACCOUNTS:
            const accountsDataCopy = cloneDeep(state.accountsData);
            forEach(accountsDataCopy, ad => {
                ad.isHighlight = (ad.managerId === parseInt(action.id));
            })

            return { ...state, accountsData: accountsDataCopy };

        default: return state
    }
}

const findEmployeeTree = (id, managersData) => {
    Object.entries(managersData).map(([key, value]) => {
        if (value.supervisorId === parseInt(id)) {
            value.isHighlight = true;
            findEmployeeTree(key, managersData);
        }
    })
}
