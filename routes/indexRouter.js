const {Router} = require("express");
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  

const indexRouter = Router();

indexRouter.get("/", (req, res)=> {
    
    res.render("index", {title: "mini message board",message: messages})
  });


indexRouter.post("/new", (req,res)=> {    
    messages.push({text: req.body.message, user: req.body.name, added: new Date() })
    res.redirect("/");
});   

indexRouter.get("/post/:postid", (req, res)=> {
  let id = req.params.postid;
  let data = messages[id];
  res.render("details", {title: "Details", data: data});

})



module.exports = indexRouter; 