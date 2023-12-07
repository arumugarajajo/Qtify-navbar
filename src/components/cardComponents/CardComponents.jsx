import React, { useState, useEffect } from "react";
import "./CardComponents.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import arrow icons

function CardComponents() {
  const [albums, setAlbums] = useState([]);
  const [displayedAlbums, setDisplayedAlbums] = useState(7);
  const albumsPerPage = 7;

  useEffect(() => {
    // Fetching data from the provided API
    fetch("https://qtify-backend-labs.crio.do/albums/top")
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, []);

  const showMoreAlbums = (increment) => {
    const newDisplayedAlbums = Math.min(albums.length, displayedAlbums + increment);
    setDisplayedAlbums(newDisplayedAlbums);
  };

  const showPreviousAlbums = () => {
    const newDisplayedAlbums = Math.max(0, displayedAlbums - albumsPerPage);
    setDisplayedAlbums(newDisplayedAlbums);
  };

  const showNextAlbums = () => {
    const newDisplayedAlbums = Math.min(albums.length, displayedAlbums + albumsPerPage);
    setDisplayedAlbums(newDisplayedAlbums);
  };

  return (
    <div className="cardComponents">
      <h3>Top Albums</h3>
      <div className="card-container">
        {albums.slice(0, displayedAlbums).map((album, index) => (
          <div className="card" key={index}>
            {/* Card content */}
            <div className="inside">
              <div className="top">
                <div className="img-wrapper">
                  <img
                    className="img"
                    src={album.imageUrl}
                    alt="Album Cover"
                  />
                  <div className="title">{album.title}</div>
                  <div className="year">{album.year}</div>
                </div>
                <div className="follows">{album.follows}</div>
              </div>
              <div className="slug">{album.slug}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button onClick={showPreviousAlbums} disabled={displayedAlbums <= albumsPerPage}>
          <FaChevronLeft />
        </button>
        {albums.length > displayedAlbums && (
          <button onClick={() => showMoreAlbums(albumsPerPage)}>See More</button>
        )}
        <button onClick={showNextAlbums} disabled={displayedAlbums >= albums.length}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default CardComponents;
