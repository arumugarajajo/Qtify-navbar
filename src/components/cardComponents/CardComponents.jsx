import React, { useState, useEffect } from "react";
import "./CardComponents.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function CardComponents() {
  const [albums, setAlbums] = useState([]);
  const albumsPerPage = 7;

  useEffect(() => {
    fetch("https://qtify-backend-labs.crio.do/albums/top")
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, []);

  return (
    <div className="cardComponents">
      <div className="top-text">
      <h3>Top Albums</h3>
      <h3>Select All</h3>
      </div>
      <div className="card-container">
        {albums.map((album, index) => (
          <div className="card" key={index}>
            <div className="inside">
              <div className="top">
                <div className="img-wrapper">
                  <img
                    className="img"
                    src={album.image}
                    alt="Album Cover"
                  />
                  <div className="title">{album.title}</div>
                  <div className="description">{album.description}</div>
                </div>
                <div className="follows">{album.follows} Follows</div>
              </div>
              <div className="slug">{album.slug}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardComponents;
