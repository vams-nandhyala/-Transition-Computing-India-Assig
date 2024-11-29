const axios = require('axios');

const API_URL = "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63635";

async function fetchApplicationData() {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Ensure the API's data structure matches
        console.log(data)
    } catch (error) {
        console.error("Error fetching application data:", error);
        throw new Error("Failed to fetch data");
    }
}

module.exports = { fetchApplicationData };
