import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
    // You can replace this with the actual stream gauge data
    const streamGauges = [
        { id: 1, name: "Gauge 1", lat: 38.573936, lng: -92.603760 },
        // ... other stream gauges
    ];
    return (
        <Container fluid>
            <Row>
                <Col sm={6} style={{ height: '100vh' }}>
                    <MapContainer center={[38.573936, -92.603760]} zoom={10} style={{ height: '95%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {streamGauges.map(gauge => (
                            <Marker key={gauge.id} position={[gauge.lat, gauge.lng]}>
                                <Popup>{gauge.name}</Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </Col>
                <Col sm={6} style={{ height: '100vh', overflowY: 'auto' }}>
                    <h2 style={{textAlign: "center"}}>Stream Conditions</h2>
                    {/* Place stream gauge details here */}
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
