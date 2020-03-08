import React, {createContext} from 'react'
import {Children} from './provider-children';

const name = 'Andy';
export const UserContext = createContext(name);


export const Provider = () => {
    return (
        <Children/>
    );
};

