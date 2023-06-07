const express = require("express");
const Connection = require("./db/db");
const createData = require("./routes/employees");

const app = express();
app.use(express.json());

app.use(createData);
console.log("ok3");

if (Connection) {
  console.log("Mongodb is connected to the server");
}
app.listen(4001, () => {
  console.log("Sever is running on 4001 Port");
});
