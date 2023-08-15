const axios = require('axios');
require('dotenv').config();

const symbol = 'WE'; // Replace with your stock symbol
const apiKey = process.env.AlphaVantageAPIKey; 
const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${apiKey}`;

axios.get(apiUrl)
  .then(response => {
    console.log(response.data); 
  })
  .catch(error => {
    console.error(error); 
  });