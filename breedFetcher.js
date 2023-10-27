const request = require("request");

// Refactor code to move request logic in a function:
const fetchBreedDescription = function(breedName, callback) {
  // Initialize url for the API endpoint:
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  // Use the request library to make an HTTP GET request to the given URL:
  request(url, (error, response, body) => {
    // Edge-Case: Request failed -> If request failed, callback is called with the error message:
    if (error) {
      callback("An error occurred: ${error}", null);
      return;
    }
    // CHeck if response status code request is successful:
    if (response.statusCode === 200) {
    //Parsing string data into object with JSON:
      const data = JSON.parse(body);
      // Edge-Case: Breed not found -> If breed is not found callback is called with a not found:
      if (data.length === 0) {
        callback("Breed not found.", null);
        return;
      }
      // If no error and everything is ok, callback is called with null to signal no error:
      const breedDescription = data[0].description;
      callback(null, breedDescription);
    }
  });
};

module.exports = { fetchBreedDescription };