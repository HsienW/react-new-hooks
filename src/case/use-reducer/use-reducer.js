import React, {useState, useReducer} from 'react'
import {userListApiSimulation} from '../../common/api-simulation';

const UserListActions = {
    getUserListStart: 'GET_USER_LIST_START',
    getUserListSuccess: 'GET_USER_LIST_SUCCESS',
    getUserListFailed: 'GET_USER_LIST_FAILED',
};

function userListReducer(state, action) {
    console.log('[[[[[[[[[[');
    console.log(state);
    console.log(action);
    switch (action.type) {
        case UserListActions.getUserListSuccess:
            return {state: action.payload};
        case UserListActions.getUserListFailed:
            return;
        default:
            throw new Error();
    }
}

export const UseReducer = () => {

    let [state, dispatch] = useReducer(userListReducer, []);

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
                state.length !== 0
                    ? <ul>
                        {
                            state.map((item) => {
                                return (
                                    <li>Name:{item.name}</li>
                                )
                            })
                        }
                    </ul>
                    : <div>Loading...</div>
            }
        </div>
    );
};