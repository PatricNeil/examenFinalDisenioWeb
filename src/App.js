import React from 'react';
import './App.css';
import Buscador from './componentes/buscador';
import VideoPlayer from './componentes/videoplayer';
import VideosEncontrados from './componentes/videosencontrados';

function App() {
    return (
        <div className="app">
            <Buscador/>
            <div className='contenido'>
              <VideoPlayer />
              <VideosEncontrados />
            </div>
        </div>
    );
}

export default App;
