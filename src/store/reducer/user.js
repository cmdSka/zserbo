import { FETCH_USERS_START, FETCH_USERS_FAILED, FETCH_USERS_SUCCESS } from "../actionTypes";

const initialState = {
    users: [],
    loading: false,
    error: null
};

const fetchUserStart = state => {
    return {
        ...state,
        loading: true
    };
};

const fetchUserSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        users: [...action.users]
    };
};

const fetchUserFailed = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    };
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_START:
            return fetchUserStart(state);
        case FETCH_USERS_SUCCESS:
            return fetchUserSuccess(state, action);
        case FETCH_USERS_FAILED:
            return fetchUserFailed(state, action);
        default:
            return state;
    }
};

export default reducer;