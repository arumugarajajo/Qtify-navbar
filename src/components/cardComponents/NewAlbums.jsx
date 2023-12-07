import React, { useState, useEffect } from "react";
import "./NewAlbums.css";

function NewAlbums() {
  const [albums, setAlbums] = useState([]);
  const [displayAll, setDisplayAll] = useState(false);
  const albumsPerPage = 7;

  useEffect(() => {
    fetch("https://qtify-backend-labs.crio.do/albums/new")
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, []);

  const toggleDisplay = () => { 
    setDisplayAll(!displayAll); 
  };

  return (
    <div className="newalbums">
      <div className="top-text">
        <h3>Top Albums</h3>
        <h3 onClick={toggleDisplay}> {!displayAll ? "Show All" : "Collapse All"}</h3>
      </div>
      <div className="card-container">
        {displayAll
          ? albums.map((album, index) => (
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
            ))
          : albums.slice(0, albumsPerPage).map((album, index) => (
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

export default NewAlbums;
