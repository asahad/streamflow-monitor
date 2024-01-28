const About = () => {
  return (
    <div style={{ margin: "20px", padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <h1 style={{ color: "#333", textAlign: "center" }}>StreamFlow Monitor</h1>
      <p style={{ color: "#555", lineHeight: "1.6", fontSize: "16px", textAlign: "justify", textJustify: "inter-word" }}>
        Streamflow monitor is an interactive web-based tool for monitoring streamflow and gage height within the State of Missouri in the United States. Streamflow is the volume of water moving through a given point of a stream per unit of time, and gage height is the height of the stream at that particular point. The app fetches real-time data from 274 USGS stream gages from the USGS Water Services API.
      </p>
    </div>
  );
};

export default About;
