import React, {useReducer} from 'react'
import {userListApiSimulation} from '../../common/api-simulation';

const UserListActions = {
    getUserListStart: 'GET_USER_LIST_START',
    getUserListSuccess: 'GET_USER_LIST_SUCCESS',
    getUserListFailed: 'GET_USER_LIST_FAILED',
};

const initialUserList = {
    data: []
};

function userListReducer(state, action) {
    switch (action.type) {
        case UserListActions.getUserListSuccess:
            return {...state, data: action.payload};
        case UserListActions.getUserListFailed:
            return {...state, data: action.payload};
        default:
            throw new Error();
    }
}

export const UseReducer = () => {

    let [state, dispatch] = useReducer(userListReducer, initialUserList);

    const getUserList = () => {
        userListApiSimulation()
            .then((respond) => {
                dispatch({type: UserListActions.getUserListSuccess, payload: respond})
            })
            .catch((error) => {
                dispatch({type: UserListActions.getUserListFailed, payload: error})
            });
    };

    return (
        <div>
            <button onClick={getUserList}>Dispatch Load</button>
            {
                state.data.length !== 0
                    ? <ul>
                        {
                            state.data.map((item) => {
                                return (
                                    <li key={item.id}>
                                        Name:{item.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    : <div>Loading...</div>
            }
        </div>
    );
};