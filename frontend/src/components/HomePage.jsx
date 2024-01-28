import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Container, Row, Col } from "react-bootstrap";
import streamGauge from "./streamGauge";
const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={6} style={{ height: "100vh" }}>
          <MapContainer
            center={[38.573936, -92.60376]}
            zoom={10}
            style={{ height: "95%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {streamGauge.map((gage) => (
              <Marker key={gage.SiteNumber} position={[gage.SiteLatitude, gage.SiteLongitude]}>
                <Popup>{gage.SiteName}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </Col>
        <Col sm={6} style={{ height: "100vh", overflowY: "auto" }}>
          <h2 style={{ textAlign: "center" }}>Stream Conditions</h2>
          {/* Place stream gauge details here */}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
