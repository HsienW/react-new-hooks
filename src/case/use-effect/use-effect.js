import React, {useState, useEffect} from 'react'
import {userListApiSimulation} from '../../common/api-simulation';

export const UseEffect = () => {

    let [getApiState, changeGetApiState] = useState(false);
    let [userList, changeListContent] = useState([]);

    useEffect(() => {
        userListApiSimulation()
            .then((respond) => {
                changeListContent(respond);
                changeGetApiState(true);
            })
            .catch((error) => {
                changeGetApiState(false);
            });
    });

    return (
        <div>
            {
                getApiState
                    ? <ul>
                        {
                            userList.map((item) => {
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
