import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // Ensure Marker is included here
import { Container, Row, Col } from "react-bootstrap";
import streamGauge from "./streamGauge";
import "leaflet/dist/leaflet.css";
import "../style/custom.css"
const HomePage = () => {
  const [selectedSiteName, setSelectedSiteName] = useState("");
  const GaugeMarker = ({ gage }) => {
    return (
      <Marker
        position={[gage.SiteLatitude, gage.SiteLongitude]}
        eventHandlers={{
          click: () => {
            setSelectedSiteName(gage.SiteName);
          },
        }}
      >
        <Popup>{gage.SiteName}</Popup>
      </Marker>
    );
  };

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
              <GaugeMarker key={gage.SiteNumber} gage={gage} />
            ))}
          </MapContainer>
        </Col>
        <Col sm={6} style={{ height: "100vh", overflowY: "auto" }}>
          <h2 style={{ textAlign: "center" }} className="mainHeading">Stream Conditions</h2>
          {selectedSiteName && (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <h3 className="siteName">{selectedSiteName}</h3>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
