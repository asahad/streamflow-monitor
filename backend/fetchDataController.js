
const fetchUSGSData = async (req, res) => {
  try {
    // Extract data from request body
    const {siteNumber, latitude, Longitude  } = req.body;

    // Ensure all necessary fields are present
    if (!siteNumber || !Longitude || !latitude) {
      return res.status(400).json({
        message: "The Gauge Station does not have the required information",
      });
    }

    // Send confirmation email
    await fetchData({ siteNumber, latitude, Longitude });

    // Send success response
    res.status(200).json({
      message: "Form submitted successfully",
      data: req.body,
    });
  } catch (error) {
    // Log the error for server-side debugging
    console.error("Error in sendForm:", error);

    // Send error response
    res.status(500).json({
      message: "Error processing form submission",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

const trialEndpoint = async (req, res) => {
  res.status(200).json({
    message: "This is working of course",
  });
};

module.exports = { fetchUSGSData, trialEndpoint };