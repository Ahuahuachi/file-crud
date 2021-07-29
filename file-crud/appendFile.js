const fs = require("fs");

fs.appendFile("message.txt", "Another string", "utf8", (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("File modified succcessfuly!");
  }
});
