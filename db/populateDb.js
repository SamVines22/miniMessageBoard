const {Client} = require("pg");
const SQL = `CREATE TABLE IF NOT EXISTS allmessages 
(id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
username VARCHAR(255), 
text VARCHAR(255), 
added TIMESTAMPTZ);
INSERT INTO allmessages (username, text, added) VALUES ('Lewis', 'Hello world', NOW());`;

async function main() {
    console.log("hello.....");
    const client = new Client({connectionString: "postgresql://vboxuser:snotsnot@localhost:5432/messages"});
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done!");
}

main();