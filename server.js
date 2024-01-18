const session = require("express-session");




const express = require('express');


const app = express();
const port = 3306;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});