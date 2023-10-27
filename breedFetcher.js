const request = require("request");
const fs = require("fs");

// Parse command-line arguments to get the URL and the file path:
const url = process.argv[2];
const filePath = process.argv[3];
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
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
  
  // Once receive data, write to local file (i.e:fs.writefile):
  // Callback error is a function that will be executed after the write operation is completed or if error occurs:
  // fs.writeFile(filePath, body, (error) => {
  //   if (error) {
  //     console.log("An error occurred while writing the file:", error);
  //     return;
  //   }
  //   // Print to confirm that file has been successfully written:
  //   console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  // });
});