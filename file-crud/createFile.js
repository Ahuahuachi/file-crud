const fs = require("fs");

const callback = (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("The file has been saved!");
  }
};

fs.writeFile("message.txt", "Hello Node.js", "utf8", callback);
