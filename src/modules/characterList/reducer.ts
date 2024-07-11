const INITIAL_PAGE = 1;

const CHARACTER_LIST_INITIAL_STATE = {
    search: '',
    initialized: false,
    pagination: {
        currentPage: INITIAL_PAGE,
        pageSize: 0,
        totalItems: 0
    }
}

enum CharacterListAction {
    INITIALIZE = 'INITIALIZE',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_SEARCH = 'SET_SEARCH',
    SET_PAGINATION = 'SET_PAGINATION',
}

type ActionType = { type: CharacterListAction.SET_CURRENT_PAGE, currentPage: number }
    | { type: CharacterListAction.SET_SEARCH, search: string }
    | { type: CharacterListAction.INITIALIZE }
    | { type: CharacterListAction.SET_PAGINATION, pageSize: number, totalItems: number }

interface Pagination {
    totalItems: number,
    pageSize: number,
    currentPage: number
}

interface State {
    search: string
    initialized: boolean
    pagination: Pagination
}

const characterListReducer = (state: State, action: ActionType): State => {
    switch (action.type) {
        case CharacterListAction.SET_CURRENT_PAGE: {
            return {...state, pagination: {...state.pagination, currentPage: action.currentPage}};
        }
        case CharacterListAction.SET_SEARCH: {
            return {...state, search: action.search, pagination: {...state.pagination, currentPage: INITIAL_PAGE}}
        }
        case CharacterListAction.INITIALIZE: {
            return {...state, initialized: true };
        }
        case CharacterListAction.SET_PAGINATION: {
            return {...state, pagination: {...state.pagination, totalItems: action.totalItems, pageSize: action.pageSize}};
        }
        default:
            return state;
    }
};

export { characterListReducer, CharacterListAction, CHARACTER_LIST_INITIAL_STATE }