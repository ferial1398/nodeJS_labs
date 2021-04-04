const express = require("express");


const app = express();

//middleware
app.use(express.json());

const users = [
  { id: 1, name: "ferial" },
  { id: 2, name: "fawzy" },
  { id: 3, name: "ghhsj" },
  { id: 4, name: "jryu6" },
  { id: 5, name: "Mohamed" },
  { id: 6, name: "Ali" },
  { id: 7, name: "Hady" },
  
  

];

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});
// get data all user
app.get("/users", (req, res) => {
  res.send(users);
});
// get data one user with insert data
app.get("/users/:id", (req, res) => {
 const { id } = req.params;
  const user = users.find((user) => user.id === +id);
  res.send(user);
});
// add data one user with its id
app.post("/users", (req, res) => {
  const { name } = req.body;
  const id = users[users.length - 1].id + 1;
  users.push({id,name});
  res.send(users);
});




app.put("/users/:id", (req, res) => {
  const id = req.params.id-1;
   const {name} = req.body;
   users[id]["name"] = req.body.name;
   res.send(users);
 } )



const {name} = req.body;
     const user = users.find((user) => user.id === +id);
    // const user = users.find((user) => user.id === +id);
     user.name= name;

 app.delete("/users/:id", (req, res) => {
    //let { name } = req.body;
    const id  = req.params.id;
    //const user = users.find((user) => user.id === +id);
    const index = users.findIndex((index) => index.id === +id);
    //const user= users.filter( user => user.id === +id);
    users.splice(index,1);
    res.send(index);
  });




app.listen(5000, (error) => {
  console.log("port 5000");
});
