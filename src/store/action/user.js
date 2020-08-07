import axios from 'axios';

const { FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED } = require("../actionTypes");

const fetchUserStart = () => {
    return {
        type: FETCH_USERS_START
    };
};

const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        users: users
    };
};

const fetchUserFailed = error => {
    return {
        type: FETCH_USERS_FAILED,
        error: error
    };
};

export const fetchUsers = () => {
    return async dispatch => {
        try {
            dispatch(fetchUserStart());

            setTimeout(async () => {
                const users = await axios
                    .get('http://localhost:3000/users')
                    .then(response => response.data);
                
                dispatch(fetchUserSuccess(users));
            }, 3000);

        } catch (error) {
            console.log(error);
            dispatch(fetchUserFailed(error));
        }
    };
};