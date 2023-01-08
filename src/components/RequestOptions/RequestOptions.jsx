import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Fragment } from "react";
import RequestParams from "./RequestParams";
import RequestHeaders from "./RequestHeaders";

const RequestQuerys = () => {
    const [isHeadersSelect, setIsHeadersSelect] = useState(false);
    const [isParamsSelect, setIsParamsSelect] = useState(false);

    const headersButtonStyle = `${
        isHeadersSelect
            ? "btn btn-success rounded-2"
            : "btn btn-outline-success rounded-2"
    }`;

    const paramsButtonStyle = `${
        isParamsSelect
            ? "btn btn-success rounded-2"
            : "btn btn-outline-success rounded-2"
    }`;

    const headerButtonClickHandler = () => {
        setIsHeadersSelect(true);
        setIsParamsSelect(false);
    };

    const paramsButtonClickHandler = () => {
        setIsParamsSelect(true);
        setIsHeadersSelect(false);
    };

    return (
        <Fragment>
            <div className='container border mt-5 p-3 rounded-2 text-center'>
                <div className='row justify-content-evenly'>
                    <div class='col-4'>
                        <button
                            onClick={headerButtonClickHandler}
                            className={headersButtonStyle}
                        >
                            Headers
                        </button>
                    </div>
                    <div class='col-4'>
                        <button
                            onClick={paramsButtonClickHandler}
                            className={paramsButtonStyle}
                        >
                            Params
                        </button>
                    </div>
                </div>
                <div>
                    {isHeadersSelect ? (
                        <div className='border mt-5 p-3'>
                            <RequestHeaders />
                        </div>
                    ) : null}
                    {isParamsSelect ? (
                        <div className='border mt-5 p-3'>
                            <RequestParams />
                        </div>
                    ) : null}
                </div>
            </div>
        </Fragment>
    );
};

export default RequestQuerys;
