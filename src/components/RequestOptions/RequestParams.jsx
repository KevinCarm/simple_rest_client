import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import RequestParamsItem from "./RequestParamsItem";
import add from "../../assets/plus.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { apiActions } from "../../store/apidataSlice";

const RequestParams = () => {
    const dispatch = useDispatch();
    const [itemCuantity, setItemCuantity] = useState([]);

    const onAddItemHandler = () => {
        setItemCuantity(prev => {
            return [
                ...prev,
                { keyItem: "", valueItem: "", id: new Date().toISOString() },
            ];
        });
    };

    const onItemChangeHandler = item => {
        setItemCuantity(prev => {
            let newState = itemCuantity.map(i => {
                if (i.id === item.id) {
                    return {
                        ...i,
                        keyItem: item.keyItem,
                        valueItem: item.valueItem,
                    };
                }
                return i;
            });

            newState = newState.map(i => {
                if (i.keyItem === item.keyItem) {
                    console.log(i);
                    return {
                        ...i,
                        valueItem: item.valueItem,
                    };
                }
                return i;
            });

            dispatch(apiActions.saveParams(newState));
            return newState;
        });
    };

    return (
        <Fragment>
            <div className='row justify-content-start'>
                <div className='col'>
                    <p style={{ maxWidth: "100px" }}>Query Params</p>
                </div>
                <div className='col'>
                    <img
                        onClick={onAddItemHandler}
                        className='rounded-circle'
                        role='button'
                        src={add}
                        style={{ maxWidth: "100px", cursor: "" }}
                    />
                </div>
            </div>
            {itemCuantity.map(item => {
                return (
                    <RequestParamsItem
                        key={item.id}
                        keyItem={item.keyItem}
                        valueItem={item.valueItem}
                        id={item.id}
                        itemChange={onItemChangeHandler}
                    />
                );
            })}
        </Fragment>
    );
};

export default RequestParams;
