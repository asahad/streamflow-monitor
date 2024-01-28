const fetch = require("node-fetch");
// Utility function to parse TSV data
function parseTSVData(tsvData) {
  // Split data into lines
  const lines = tsvData.split("\n");

  // Filter out comments and header lines, then map over each line
  const data = lines
    .filter((line) => line && !line.startsWith("#") && !line.startsWith("5s"))
    .map((line) => {
      const columns = line.split("\t");
      return {
        datetime: columns[2], // Assuming datetime is always in the third column
        discharge: columns[3], // Assuming discharge is in the fourth column
        // discharge_cd: columns[4], // Discharge data-value qualification code
        gageHeight: columns[5], // Assuming gage height is in the sixth column
        // gageHeight_cd: columns[6], // Gage height data-value qualification code
      };
    });
  return data;
}
async function fetchWaterDataFromUSGS(
  siteNumber,
  startDate = "2023-01-01",
  endDate = "2024-01-26"
) {
  const format = "rdb"; // Tab-separated format; adjust as needed
  const url = `https://waterdata.usgs.gov/nwis/dv?cb_00060=on&cb_00065=on&format=${format}&site_no=${siteNumber}&period=&begin_date=${startDate}&end_date=${endDate}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data from USGS: ${response.statusText}`);
    }
    const tsvData = await response.text();
    // Parse the TSV data into a more usable format
    const parsedData = parseTSVData(tsvData);
    return { success: true, data: parsedData };
  } catch (error) {
    console.error("Error fetching water data from USGS:", error);
    return { success: false, error: error.message };
  }
}
module.exports = { fetchWaterDataFromUSGS };
