import React, {Fragment, useContext} from 'react'
import {UserContext} from './Provider';

export const Children = () => {
    const name = useContext(UserContext);
    return (
        <Fragment>
            <p>Hi</p>
            <UserContext.Consumer>
                {() => name}
            </UserContext.Consumer>
        </Fragment>
    );
};