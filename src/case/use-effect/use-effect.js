import React, {useState, useEffect} from 'react'

const userListApiSimulation = () => {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            setTimeout(() => {
                resolve([
                    {
                        name: '123'
                    },
                    {
                        name: '456'
                    },
                    {
                        name: '789'
                    }
                ]);
            }, 1000);
        } else {
            reject('error');
        }
    });
};

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
