import React from "react";
import Tiles from "./tiles/tiles.js";

const TileWrapper = props => {
     return(
          <div className="container">
               <div className="row">
                    {props.images.map( (img, index) => {
                         console.log(img);
                         return (
                              <div className="col-sm-3" key={index}>
                                   <Tiles 
                                   tile_num={index}
                                   id={`img-${index}`}
                                   handleClick={props.handleClick}
                                   img_src={img.img_src}
                                   />
                              </div>
                         )
                    })}
               </div>
          </div>
     )
}

export default TileWrapper;