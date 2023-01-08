import "bootstrap/dist/css/bootstrap.min.css";
import style from "./ResponseContainer.module.css";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/1337.css";
import { Fragment } from "react";

const ResponseContainer = props => {
   const data = props.response;
   return (
      <Fragment>
         <div className={style.response_container}>
            <div className="row justify-content-between">
               <div className="col-4">
                  <h3>Response</h3>
               </div>
               <div className="col-4">
                  <h5>Status: {data.status}</h5>
               </div>
            </div>
            <br />
            <div className={style.scroll}>
               <JSONPretty
                  className="__json-pretty__"
                  id="json-pretty"
                  data={data.response}
               ></JSONPretty>
            </div>
         </div>
      </Fragment>
   );
};

export default ResponseContainer;
