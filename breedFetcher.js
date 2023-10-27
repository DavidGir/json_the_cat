const request = require("request");

// Parse command-line arguments to get the URL:
const url = process.argv[2];

// If the input in command line is not a url or filepath; print a message to tell user proper usage input:
if (!url || !filePath) {
  console.log("You should input in your terminal: node fetcher.js <url> <filePath>");
  return;
}
// Get a visual print to see input info:
console.log(`You provided the URL: ${url}`);
console.log(`You provided the file path: ${filePath}`);

// Use the request library to make an HTTP GET request to the given URL:
request(url, (error, response, body) => {
  if (error) {
    console.log("An error occurred:", error);
    return;
  }
  // CHeck if response status code request is successful:
  if (response.statusCode === 200) {
    console.log(body);
    console.log(typeof body);
  }
  //Parsing string data into object with JSON:
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  // Accessing the first entry in the data array:
  // if (Array.isArray(data)) {
  //   const firstEntry = data[0].weight;
  //   console.log("First entry:", firstEntry);
  // //Just to return that its not an array if it is the case:
  // } else {
  //   console.log("Data is not an array");
  }
});