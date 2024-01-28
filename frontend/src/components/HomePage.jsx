import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import "../style/custom.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";
import streamGauge from "./streamGauge";

// Define the custom marker icon
const customMarkerIcon = new L.Icon({
  iconUrl: markerIconPng,
  iconRetinaUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [20, 21],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [11, 11],
});

const HomePage = () => {
  const [selectedSiteName, setSelectedSiteName] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    gageHeight: false,
    streamflow: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/fetchusgsdata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, siteName: selectedSiteName }),
    });
    const data = await response.json();
    console.log(data); // Assuming you'll handle the response here, e.g., plot the graph
    setModalShow(false); // Close the modal after submitting
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const GaugeMarker = ({ gage }) => (
    <Marker
      position={[gage.SiteLatitude, gage.SiteLongitude]}
      icon={customMarkerIcon}
      eventHandlers={{
        click: () => {
          setSelectedSiteName(gage.SiteName);
          setModalShow(true);
        },
      }}
    >
      <Popup>{gage.SiteName}</Popup>
    </Marker>
  );

  return (
    <>
      <Container fluid>
        <Row>
          {/* Map and Stream Conditions split the screen on lg and xl, stack on smaller screens */}
          <Col xs={12} lg={6} style={{ minHeight: "150vh" }}>
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
          <Col xs={12} lg={6} style={{ overflowY: "auto" }}>
            <h2 className="mainHeading">
              {selectedSiteName
                ? selectedSiteName
                : "Select a gauge on the map"}
            </h2>
            {<h3 className="siteName">Stream Conditiona</h3>}
            {/* Placeholder for graph display */}
            {/* The Button to open the modal could also go here if needed */}
          </Col>
        </Row>
      </Container>

      <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter Details for {selectedSiteName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Form fields */}
            <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Gage Height"
                name="gageHeight"
                checked={formData.gageHeight}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Streamflow"
                name="streamflow"
                checked={formData.streamflow}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Display Results
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HomePage;
