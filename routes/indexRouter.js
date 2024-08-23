const {Router} = require("express");
const controller = require("../controllers/messageCont.js");
// const messages = [
//     {
//       text: "Hi there!",
//       user: "Amando",
//       added: new Date()
//     },
//     {
//       text: "Hello World!",
//       user: "Charles",
//       added: new Date()
//     }
//   ];
  

const indexRouter = Router();


indexRouter.get("/", controller.index);
  
  // (req, res)=> {
  //   const data = db.getMessages();
  //   console.log(data);
  //   res.render("index", {title: "mini message board",message: messages})
  // });

indexRouter.get("/new", controller.form);
  
  //(req, res)=> res.render("form", {message: "New Message"}));


indexRouter.post("/new", controller.newMessage);
  
//   (req,res)=> {    
//     messages.push({text: req.body.message, user: req.body.name, added: new Date() })
//     res.redirect("/");
// });   

indexRouter.get("/post/:postid", controller.individualMessage);
  
//   (req, res)=> {
//   let id = req.params.postid;
//   let data = messages[id];
//   res.render("details", {title: "Details", data: data});

// })



module.exports = indexRouter; 