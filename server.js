const app  = require("./app");
const dbConnection = require("./config/database-connection");

const port = process.env.PORT || 3000;
app.listen(port, () => {
  dbConnection();
  console.log(`Listening on port ${port}...`)
});