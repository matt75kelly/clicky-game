import React from "react";
import "./banner.css";

const Banner = props => {
     return(
          <div className="container-fluid">
               <div className="row">
                    <div className="col-sm-4">
                         <h1>Clicky Memory Game</h1>
                    </div>
                    <div className="col-sm-4">
                         <h1>{props.text}</h1>
                    </div>
                    <div className="col-sm-4">
                         <h1>{`Score: ${props.current_score}| Top Score: ${props.top_score}`}</h1>
                    </div>
               </div>
          </div>
     );
}

export default Banner;