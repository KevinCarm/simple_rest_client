import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiActions } from "../../store/apidataSlice";

const RequestBody = () => {
    const [inputBody, setInputBody] = useState("");
    const dispatch = useDispatch();

    const onTextHandlerChange = event => {
        try {
            const obj = JSON.parse(event.target.value);
            const pretty = JSON.stringify(obj, undefined, 4);
            setInputBody(pretty);
            dispatch(apiActions.saveBody(pretty));
        } catch (err) {
            setInputBody(event.target.value);
            dispatch(apiActions.saveBody(event.target.value));
        }
    };
    return (
        <Fragment>
            <div
                className='container border mt-5 p-3 rounded-2'
                style={{ height: "auto" }}
            >
                <h3>Body</h3>
                <textarea
                    onChange={onTextHandlerChange}
                    value={inputBody}
                    class='form-control rounded-2'
                    placeholder='Request body'
                    style={{ height: "300px" }}
                ></textarea>
            </div>
        </Fragment>
    );
};

export default RequestBody;
