const db = require("../db/query");

async function index (req, res) {
    const data = await db.getMessages();
    res.render("index", {title: "Mini Message Board", message: data});
}

async function newMessage (req, res) {
    const {name, message} = req.body;
    await db.insertMessage(name, message);
    res.redirect("/");
}

function form(req,res) {
    res.render("form", {message: "New Message"});
}

async function individualMessage(req,res) {
    const {postid} = req.params;
    const data = await db.findMessage(postid);
    res.render("details", {title: "details", data: data[0]});
}


module.exports = {
    index,
    newMessage,
    form,
    individualMessage
}