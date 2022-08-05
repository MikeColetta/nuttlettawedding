import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import "./style.css";

const position = [46.844318, -122.311188]

function LeafletMap() {
  return (
    <MapContainer className="leafletMap" center={position} zoom={16} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
        University of Washington Pack Forest Conference Center <br /> 9010 453rd St E, Eatonville, WA 98328
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default LeafletMap;