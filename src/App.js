import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css'

function App() {

    let nCoord = [36.174465, -86.767960];
    const centerOfUS = [39.8283, -98.5795];

    let locations = [
        {coord: [36.174465, -86.767960], name: 'Nashville'},
        {coord: [39.8283, -98.5795], name: 'Center of US'},
    ]

    let showMarkers = locations.map(location => {
        return (
            <Marker position={location.coord}>
                <Popup>
                    {location.name}
                </Popup>
            </Marker>
        )
    })


  return (
    <div className="App-header">
        Car Rental 🚗
        <div id="map">          
            <MapContainer center={centerOfUS} zoom={3.5} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {showMarkers}
            </MapContainer>
        </div>

    </div>
  );
}

export default App;
