// Assuming fetchWaterDataFromUSGS is already defined and imported from 'usgsDataService.js'
const { fetchWaterDataFromUSGS } = require("./Utils.js");
const fetchUSGSData = async (req, res) => {
  try {
    // Destructuring to extract siteNumber, startDate, and endDate from the request body
    const { siteNumber, startDate, endDate } = req.body;

    // Validate the required fields
    if (!siteNumber) {
      return res.status(400).json({ message: "The site number is required" });
    }
    if (!startDate || !endDate) {
      return res
        .status(400)
        .json({ message: "Both start date and end date are required" });
    }

    // Call fetchWaterDataFromUSGS with siteNumber, startDate, and endDate
    const { success, data, error } = await fetchWaterDataFromUSGS(
      siteNumber,
      startDate,
      endDate
    );

    // Check if the data fetching was successful
    if (!success) {
      throw new Error(error);
    }

    // Respond with the fetched and processed data
    res.status(200).json({
      message: "Data fetched successfully",
      data, // This data is ready for use on the client side
    });
  } catch (error) {
    console.error("Error in fetchUSGSData:", error);
    res.status(500).json({
      message: "Error processing request",
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
