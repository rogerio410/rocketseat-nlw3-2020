import Leaflet from 'leaflet'

import mapMarkerImg from '../images/map-mark.svg'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconAnchor: [15, 30],
    iconSize: [35, 45],
    popupAnchor: [135, 20]
})

export default mapIcon