const request = require("request");

// Parse command-line arguments to get the URL:
const breedName = process.argv[2];

// If the input in command line is not a breed name; print a message to tell user proper usage input:
if (!breedName) {
  console.log("You should input in your terminal: node breedFetcher.js <breedName>");
  return;
}
// Initialize url for the API endpoint:
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

// Use the request library to make an HTTP GET request to the given URL:
request(url, (error, response, body) => {
  // Edge-Case: Request failed -> If there is a typo in url the error message will show on the terminal:
  if (error) {
    console.log("An error occurred:", error);
    return;
  }
  // CHeck if response status code request is successful:
  if (response.statusCode === 200) {
    // console.log(body);
    // console.log(typeof body);
    //Parsing string data into object with JSON:
    const data = JSON.parse(body);
    // console.log(data);
    // Edge-Case: Breed not found -> If breed name is not found:
    if (data.length === 0) {
      console.log("Breed not found.");
      return;
    }
    // Output breed description on terminal for user to see:
    const breedDescription = data[0].description;
    console.log(breedDescription);
  }
});