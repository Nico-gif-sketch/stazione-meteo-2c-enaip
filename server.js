console.log("il server is starting...");
 
 
const express = require('express');
const app = express();
const port = 3000;
 
app.use(express.static('public'));


app.get('/', (req, res) =>{
  res.send('Benvenuto nel server 2c!');
});
 

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
 
 