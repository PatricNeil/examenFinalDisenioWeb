import React from 'react';
import '../hojas-de-estilo/videoplayer.css';
import video from '../imagenes/img1.jpg';

function VideoPlayer() {
    return (
        <div className="video-player">
            <h2>Video Player</h2>
            <img src={video} alt="Main Video" style={{ width: '100%', height: '80%' }} />
        </div>
    );
}

export default VideoPlayer;
