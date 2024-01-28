const About = () => {
  return (
    <div style={{ margin: "20px", padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <h1 style={{ color: "#333", textAlign: "center" }}>StreamFlow Monitor</h1>

      <section>
        <h2 style={{ color: "#555", marginTop: "20px" }}>Overview</h2>
        <p style={{ color: "#555", lineHeight: "1.6", fontSize: "16px", textAlign: "justify", textJustify: "inter-word" }}>
          Streamflow Monitor is a web application designed for the monitoring and visualization of streamflow data across various gauge stations within the United States, focusing specifically on the state of Missouri. It displays data from 274 gauge stations, offering insights into streamflow and gauge height measurements. This application utilizes data from the USGS Water Services API to provide users with real-time information.
        </p>
      </section>

      <section>
        <h2 style={{ color: "#555", marginTop: "20px" }}>How to use this App?</h2>
        <p style={{ color: "#555", lineHeight: "1.6", fontSize: "16px", textAlign: "justify", textJustify: "inter-word" }}>
          There are 274 gauge stations within the State. Select any gauge station, and a pop-up form will appear. Fill out the kind of stream parameter you would like to visualize as well the date range, and click on "Display Results" to see the data visualized on the map and in the charts.
        </p>
      </section>

      <section>
        <h2 style={{ color: "#555", marginTop: "20px" }}>Who is this app for?</h2>
        <p style={{ color: "#555", lineHeight: "1.6", fontSize: "16px", textAlign: "justify", textJustify: "inter-word" }}>
          This app can be very useful for water resource managers or city planners within the state of Missouri, researchers, and anybody who is interested in monitoring water resources.
        </p>
      </section>

      <section>
        <h2 style={{ color: "#555", marginTop: "20px" }}>Any Feature you would like included?</h2>
        <p style={{ color: "#555", lineHeight: "1.6", fontSize: "16px", textAlign: "justify", textJustify: "inter-word" }}>
          There is so much that can be included in this web application. Please contact me if there is any feature that you would like to be included or you would like to contribute: <a href="mailto:alhassansahad24@gmail.com">alhassansahad24@gmail.com</a>
        </p>
      </section>
    </div>
  );
};

export default About;
