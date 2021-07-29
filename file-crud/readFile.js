const fs = require("fs");

fs.readFile("message.txt", "utf8", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
