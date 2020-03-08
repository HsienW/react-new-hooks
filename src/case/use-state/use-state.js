import React, {useState} from 'react'

export const UseState = () => {

    let [keepValue, changeKeep] = useState(0);
    let [currentValue, changeCurrent] = useState(0);

    return (
        <div>
            <button onClick={() => changeKeep(keepValue = currentValue)}>Keep Current</button>
            <p/>
            <button onClick={() => changeCurrent(currentValue + 1)}>Current + 1</button>
            <p/>
            <button onClick={() => {changeCurrent(0);changeKeep(0)}}>Initial</button>
            <p/>
            <h3>Current: {currentValue}</h3>
            <h3>Keep Current: {keepValue}</h3>
        </div>
    );
};