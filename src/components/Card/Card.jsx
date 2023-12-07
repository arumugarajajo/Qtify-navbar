import React from "react";
import TopAlbum from "../cardComponents/TopAlbum";
import NewAlbums from "../cardComponents/NewAlbums";

function Card() {
  return (
    <div>
      <div className="cardWrapper">
        <TopAlbum />
        <NewAlbums />
      </div>
    </div>
  );
}

export default Card;
