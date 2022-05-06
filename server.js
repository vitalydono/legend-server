const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;

const server = http.createServer(app);

// connect to mongodb
const dbURI = process.env.MONGO_URL


mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    })
  )
  .catch((err) => console.log(err));

//path module
// const path = require("path");
// const pathObj = path.parse(__filename);
// console.log(pathObj);

//os module
// const os = require("os");
// const totalMamory = os.totalmem;
// const freeMamory = os.freemem;
// console.log(`Total Memory ${totalMamory}`);
// console.log(`Total Memory ${freeMamory}`);
