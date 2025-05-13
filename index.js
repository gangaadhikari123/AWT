/*const express = required ("express");
const app =express();
app.get("/",(req, res)=>{
    res.send(" Hello World");
});
app.listen(3000,()=>{
    console.log("Server is running in port 3000");
});*/
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
/* jsion is used for making json structure in request and response*/
/*json is a data format*/
/*12=> using fet request */
