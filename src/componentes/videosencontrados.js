import React from "react";
import "../hojas-de-estilo/videosencontrados.css";
import img1 from "../imagenes/img2.jpg";
import img2 from "../imagenes/img3.jpg";
import img3 from "../imagenes/img4.jpg";

function VideosEncontrados() {
  return (
    <div className="videos-encontrados">
      <h2>Videos Encontrados</h2>
      <div className="videos">
        <img
          src={img1}
          alt="img 1"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <img
          src={img2}
          alt="img 2"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <img src={img3} alt="img 3" style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export default VideosEncontrados;
