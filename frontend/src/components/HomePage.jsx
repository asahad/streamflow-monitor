import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Container, Row, Col } from "react-bootstrap";
import streamGauge from "./streamGauge";
import "leaflet/dist/leaflet.css";
import "../style/custom.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// Define the custom marker icon
const customMarkerIcon = new L.Icon({
  iconUrl: markerIconPng,
  iconRetinaUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const HomePage = () => {
  const [selectedSiteName, setSelectedSiteName] = useState("");

  const GaugeMarker = ({ gage }) => {
    return (
      <Marker
        position={[gage.SiteLatitude, gage.SiteLongitude]}
        icon={customMarkerIcon}
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
        {/* For small to medium viewports, take full width. For lg and xl, take half width */}
        <Col xs={12} lg={6} style={{ minHeight: "50vh" }}>
          <MapContainer
            center={[38.573936, -92.60376]}
            zoom={10}
            style={{ height: "100%", width: "100%" }}
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
        {/* For small to medium viewports, take full width. For lg and xl, take half width */}
        <Col xs={12} lg={6} style={{ minHeight: "100vh", overflowY: "auto" }}>
          <h2 style={{ textAlign: "center" }} className="mainHeading">
            Stream Conditions
          </h2>
          {selectedSiteName && (
            <div
              style={{ marginTop: "20px", textAlign: "center" }}
              className="siteName"
            >
              <h3>{selectedSiteName}</h3>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
