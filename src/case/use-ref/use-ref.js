import React, {useRef, useState, useImperativeHandle} from 'react'

export const UseRefInput = () => {
    const [display, changeDisplay] = useState('');
    const inputElement = useRef(null);

    const onButtonClick = () => {
        changeDisplay(inputElement.current.value);
    };
    const onChangeElementValue = () => {
        inputElement.current.value = 'have been change';
        // 1. Element.current is mutable
        // 2. Change current value is not trigger render.
        changeDisplay(inputElement.current.value);
    };
    return (
        <React.Fragment>
            <input ref={inputElement} type="text"/>
            <button onClick={onButtonClick}>Show input value</button>
            <button onClick={onChangeElementValue}>Change element value</button>
            <div>Current Input: {display}</div>
        </React.Fragment>
    );
}

const SimpleInput = (props, ref) => {
    const inputRef = useRef();
    // todo should fix useImperativeHandle.
    useImperativeHandle = (ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));
    return (
        <input ref={inputRef}/>
    );
};

const RefSimpleInput = React.forwardRef(SimpleInput);

export const UseRefForm = () => {
    return (
        <form>
            <RefSimpleInput/>
        </form>
    );
};

