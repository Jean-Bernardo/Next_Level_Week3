import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import '../styles/pages/orphanages-map.css';

import logoImg from '../images/Logo.svg';

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={logoImg} alt="Logo"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Taquaritinga</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map 
                center={[-21.4205167,-48.5156972]}
                zoom={15}
                style={{width: "100%", height: "100%"}}
            >
                {/* Textura do mapa */}
                <TileLayer url={`${process.env.REACT_APP_LEAFLET_URL}`}/>
                {/* Outras alternativas (MapBox: temas escuro, satelite, etc) */}
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;