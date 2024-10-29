import React from 'react';
import '../hojas-de-estilo/buscador.css';

function Buscador() {
    return (
        <div className="buscador">
            <h2>Buscador</h2>
            <input type="text" placeholder="Buscar videos..." />
        </div>
    );
}

export default Buscador;
