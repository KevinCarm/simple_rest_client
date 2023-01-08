import "bootstrap/dist/css/bootstrap.min.css";
import style from "./UrlBar.module.css";
import { Fragment, useState, useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const UrlBar = props => {
    const [selectedOption, setSelectedOption] = useState("GET");
    const [urlInsValid, setUrlIsValid] = useState(false);
    const urlRef = useRef();
    const [url, setUrl] = useState({ baseUrl: "", newUrl: "" });
    const params = useSelector(state => state.api.params);
    let auxUrl = "";

    useEffect(() => {
        if (urlRef.current.value !== "") {
            if (url.baseUrl === "") {
                setUrl(prev => {
                    return { ...prev, baseUrl: urlRef.current.value };
                });
            }
            if (params.length > 0) {
                auxUrl = "";
                params.forEach((param, index) => {
                    if (param.keyItem !== "" && param.valueItem !== "") {
                        if (index === 0) {
                            auxUrl += "?";
                            auxUrl += `${param.keyItem}=${param.valueItem}`;
                        } else {
                            auxUrl += `&${param.keyItem}=${param.valueItem}`;
                        }
                    }
                });
                if (auxUrl.slice(-1) === "&") {
                    auxUrl = auxUrl.slice(0, -1);
                }
                setUrl(prev => {
                    urlRef.current.value = prev.baseUrl + auxUrl;
                    return { ...prev, newUrl: prev.baseUrl + auxUrl };
                });
            }
        }
    }, [params]);

    const onUrlChangeHandler = event => {
        setUrl(prev => {
            return { ...prev, baseUrl: urlRef.current.value };
        });
    };

    const onSelectChange = event => {
        setSelectedOption(event.target.value);
    };

    const onSendClickHandler = () => {
        const urlInput = urlRef.current.value;
        const inputIsEmpty = urlInput === "";
        setUrlIsValid(inputIsEmpty);
        if (!inputIsEmpty) {
            props.onRequestData({
                url: urlRef.current.value,
                method: selectedOption,
            });
        }
    };

    return (
        <Fragment>
            <div className={`container text-center ${style.margin_top_50}`}>
                <div className='row justify-content-center'>
                    <div className='col-sm-2'>
                        <select
                            defaultValue='GET'
                            onChange={onSelectChange}
                            class='form-select'
                            id='floatingSelect'
                        >
                            <option value='GET'>GET</option>
                            <option value='POST'>POST</option>
                            <option value='PUT'>PUT</option>
                            <option value='DELETE'>DELETE</option>
                        </select>
                    </div>
                    <div className='col-sm-8'>
                        <div action='row g-3'>
                            <div class='col-12'>
                                <input
                                    required
                                    ref={urlRef}
                                    onChange={onUrlChangeHandler}
                                    type='text'
                                    className='form-control'
                                    id='inputAddress'
                                    placeholder='URL'
                                />
                                {urlInsValid && (
                                    <p className={style.invalid}>
                                        You need a url
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <button
                            data-bs-toggle='modal'
                            data-bs-target='#exampleModal'
                            onClick={onSendClickHandler}
                            className='btn btn-primary'
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default UrlBar;
