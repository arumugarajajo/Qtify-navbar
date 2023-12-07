import React, { useState, useEffect } from "react";
import "./CardComponents.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
function CardComponents() {
  const [albums, setAlbums] = useState([]);
  const [displayedAlbums, setDisplayedAlbums] = useState(7);
  const albumsPerPage = 7;

  useEffect(() => {
    fetch("https://qtify-backend-labs.crio.do/albums/top")
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, []);

  // const showMoreAlbums = (increment) => {
  //   const newDisplayedAlbums = Math.min(albums.length, displayedAlbums + increment);
  //   setDisplayedAlbums(newDisplayedAlbums);
  // };

  const showPreviousAlbums = () => {
    const newDisplayedAlbums = Math.max(0, displayedAlbums - albumsPerPage);
    setDisplayedAlbums(newDisplayedAlbums);
  };

  const showNextAlbums = () => {
    const newDisplayedAlbums = Math.min(albums.length, displayedAlbums + albumsPerPage);
    setDisplayedAlbums(newDisplayedAlbums);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,  
    slidesToShow: 1, 
    slidesToScroll: 1, 
    vertical: false,
    prevArrow: <FaChevronLeft className="arrow left" onClick={showPreviousAlbums} />,
    nextArrow: <FaChevronRight className="arrow right" onClick={showNextAlbums} />,
  };
  return (
    <div className="slider-container">
    <Slider {...settings}>
      <div className="cardComponents">
        
        <h3>Top Albums</h3>
        <div className="card-container">
          {albums.slice(0, displayedAlbums).map((album, index) => (
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
    </Slider>
    </div>  
  );
}

export default CardComponents;
