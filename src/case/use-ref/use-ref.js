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

// 只提供給父層, 特定的 method, 不給整個 Ref 整體
const SimpleInput = React.forwardRef((props, ref) => {
    const inputRef = useRef();
    // useImperativeHandle 參數第一個說明: 提供哪個 Ref , 第二個說明: 要提供什麼
    useImperativeHandle(ref, () => ({
        getValue: () => {
            return inputRef.current.value;
        },
        getFocus: () => {
            return inputRef.current.focus;
        }
    }));
    return (
        <input ref={inputRef} type="text"/>
    )
});


export const UseRefForm = () => {
    const inputElement = useRef(null);
    const onButtonClick = () => {
        console.log(inputElement.current.getValue());
    };

    return (
        <div>
            <SimpleInput ref={inputElement}/>
            <button onClick={onButtonClick}>Log input value</button>
        </div>
    );
};

