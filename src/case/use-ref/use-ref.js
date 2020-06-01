import React, {useRef, useState} from 'react'

export const UseRefInput = () => {
    const [display, changeDisplay] = useState('');
    const inputElement = useRef(null);
    const onButtonClick = () => {
        changeDisplay(inputElement.current.value);
        inputElement.current.focus();
    };
    return (
        <React.Fragment>
            <input ref={inputElement} type="text" />
            <button onClick={onButtonClick}>Show input value</button>
            <div>Current Input: {display}</div>
        </React.Fragment>
    );
}
