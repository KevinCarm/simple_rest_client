import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useRef } from "react";
import { Fragment } from "react";

const RequestHeaderItem = props => {
    const [keyItem, setKeyItem] = useState(props.keyItem);
    const [valueItem, setValueItem] = useState(props.valueItem);
    const keyRef = useRef("");
    const valueRef = useRef("");

    const onKeyChangeHandler = () => {
        setKeyItem(keyRef.current.value);
    };

    const onBlurKeyHandler = () => {
        setKeyItem(keyRef.current.value);
        props.itemChange({
            id: props.id,
            keyItem: keyRef.current.value,
            valueItem: valueRef.current.value,
        });
    };

    const onBlurValueHandler = () => {
        setValueItem(valueRef.current.value);
        props.itemChange({
            id: props.id,
            keyItem: keyRef.current.value,
            valueItem: valueRef.current.value,
        });
    };

    const onValueChangeHandler = () => {
        setValueItem(valueRef.current.value);
    };

    return (
        <Fragment>
            <div className='container'>
                <div className='row align-items-start'>
                    <div className='col' style={{ maxWidth: "15rem" }}>
                        <label htmlFor='keyItem'>Key</label>
                        <input
                            id='keyItem'
                            ref={keyRef}
                            class='form-control'
                            type='text'
                            onBlur={onBlurKeyHandler}
                            value={keyItem}
                            onChange={onKeyChangeHandler}
                        />
                    </div>
                    <div className='col' style={{ maxWidth: "15rem" }}>
                        <label htmlFor='itemValue'>Value</label>
                        <input
                            onChange={onValueChangeHandler}
                            id='itemValue'
                            ref={valueRef}
                            onBlur={onBlurValueHandler}
                            type='text'
                            value={valueItem}
                            class='form-control'
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default RequestHeaderItem;
