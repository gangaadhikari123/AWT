/*const express = required ("express");
const app =express();
app.get("/",(req, res)=>{
    res.send(" Hello World");
});
app.listen(3000,()=>{
    console.log("Server is running in port 3000");
});*/
/*const express = require("express");
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

const express = require ('express')
const server= express();
server.use(express.json());

let quotes=[
  {
    id: 1,text:'It works in my machine'
  },
  {
    id: 2, text:'I will start learning js tomarrow.'
  },
];
 server.get('/quotes',(request,response)=>{
  response.json(quotes);
 })
 /*server.post ('/quotes')*/
 
 const db = require('better-sqlite3')('data.db');//we use better-sqlite because it is light weighted.
 db.prepare(
   `CREATE TABLE IF NOT EXISTS quotes (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     text TEXT NOT NULL
     )`
     ).run();

     //server.listen(4000, () => {
      //console.log("Server is running on port 4000");
    //}); // ✅
     /*run, all .next*/
     server.get(`/quotes`,(require,response)=>{
      const all = db.prepare(`SELECT *FROM quotes`).all();
      response.json(all);
     });
     server.post(`/quotes`,(request,response)=>{
      const{text} = request.body;
      const info = db.prepare("INSERT INTO quotes (text) Value(?)").run(text);
      reponse.status(201).json({id: info.lastInsertRowid,text});
     })
     //prisms is a ORM it gives databas for js.
     
     
 