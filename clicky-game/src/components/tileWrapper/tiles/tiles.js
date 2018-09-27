import React from "react";

const Tiles = props => {
     return(
          <div>
               <img
                    className="memoryTile"
                    id={props.tile_num}
                    src={props.img_src}
                    onClick={props.handleClick}
                    alt="Memory Game Tile"
                    />
          </div>
     )
}

export default Tiles;