import React from 'react'
import './styles.css'
const AlbumCard = ({id, photo, title}) =>{

    return (
      <div id="cardAlbum">
        <div className="cardAlbumContent">
          <img src={photo} alt="albuns" className="cardImage" />

          <div className="cardAlbums">
            <p className="albumId">#{id}</p>
            <p className="albumIext">{title}</p>
          </div>
        </div>
      </div>
    );
};

export default AlbumCard;