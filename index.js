const { fetchBreedDescription } = require("./breedFetcher");

// Parse command-line arguments to get the URL:
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log("Error fetch details", error);
  } else {
    console.log(description);
  }
});

