import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import mapMarkerImg from '../images/map-mark.svg'
import mapIcon from '../utils/mapIcon'

import '../styles/pages/orphanages-map.css'
import api from '../services/api'

interface Orphanage {
    id: number,
    name: string,
    latitude: number,
    longitude: number
}


function OrphanagesMaps() {

    const [orphanages, setOrphanages] = useState<Orphanage[]>([])

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data)
        })
    }, [])

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha o orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita.</p>
                </header>
                <footer>
                    <strong>Teresina</strong>
                    <span>Piauí</span>
                </footer>
            </aside>

            <Map
                center={[-5.0908463, -42.7830746]}
                zoom={11.5}
                style={{ width: '100%', height: '100%' }}>

                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                {
                    orphanages.map(orphanage => {
                        return (
                            <Marker
                                icon={mapIcon}
                                position={[orphanage.latitude, orphanage.longitude]}
                                key={orphanage.id}
                            >
                                <Popup closeButton={false} minWidth={180} maxHeight={180} className="map-popup">
                                    {orphanage.name}
                                    <Link to={`/orphanages/${orphanage.id}`}>
                                        <FiArrowRight size={16} />
                                    </Link>
                                </Popup>
                            </Marker>
                        )
                    })
                }

            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div >
    );
}

export default OrphanagesMaps;