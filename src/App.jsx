// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import RequestBody from "./components/RequestBody/RequestBody";
import ResponseContainer from "./components/ResponseContainer/ResponseContainer";
import UrlBar from "./components/UrlBar/UrlBar";
import HttpHelper from "./utils/HttpHelper";
import { useSelector } from "react-redux";
import RequestOptions from "./components/RequestOptions/RequestOptions";

function App() {
    const [response, setResponse] = useState({});
    const body = useSelector(state => state.api.body);
    const headers = useSelector(state => state.api.headers);

    const fetchData = async data => {
        const requestObject = {
            method: data.method,
        };
        if (
            data.method === "POST" ||
            data.method === "PUT" ||
            data.method === "DELETE"
        ) {
            requestObject["body"] = JSON.stringify(JSON.parse(body));
        }
        if (headers.length > 0) {
            const headerObj = {};
            headers.forEach(h => {
                headerObj[h.keyItem] = h.valueItem;
            });
            requestObject["headers"] = headerObj;
        }

        const httpResonse = await HttpHelper(data.url, requestObject);
        setResponse(httpResonse);
    };
    const requestData = data => {
        fetchData(data);
    };

    return (
        <div className='container'>
            <UrlBar onRequestData={requestData} />
            <RequestOptions />
            <RequestBody />
            <ResponseContainer response={response} />
        </div>
    );
}

export default App;
