
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Body parser middleware to handle POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static('public'));

// POST route for login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Here, you would normally check the credentials against a database
  // For demonstration, let's just log them and return a simple response
  console.log(`Username: ${username}, Password: ${password}`);
  
  // login into msysql with above username password.



  // if successful Sending a response back to the client
  res.send('Login successful');

  // if unsuccessfull then
  //res.send('Failed successful');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
