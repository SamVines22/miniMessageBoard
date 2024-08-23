const pool = require("./pool");

async function getMessages() {
    const {rows} = await pool.query("SELECT * FROM allmessages");
    return rows;
}

async function insertMessage(name, message) {
    
    await pool.query("INSERT INTO allmessages (username, text, added) VALUES ($1, $2, NOW())",[name, message]);
   
    
}

async function findMessage(id) {
    const {rows} = await pool.query("SELECT * FROM allmessages WHERE id = $1",[id]);
    return rows;

}


module.exports = {
    getMessages,
    insertMessage,
    findMessage
}