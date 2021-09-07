import React, { useEffect, useState } from "react";
import AlbumCard from "../../components/Cards/Album/index";
import api from "../../services/api";
import "./styles.css";

let Albuns = () => {
  let [albuns, setPosts] = useState([]);
  let [currentPage] = useState(1);

  useEffect(() => {
    api.get(`/albums/${currentPage}/photos/`).then((response) => {
      setPosts(response.data);
    });
  });

  return (
    <div className="albumContainer">
      <div id="albumContainerCard">
        {albuns ? (
          albuns.map((album) => (
            <AlbumCard
              photo={album.thumbnailUrl}
              title={album.title}
              id={album.id}/>))) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Albuns;
