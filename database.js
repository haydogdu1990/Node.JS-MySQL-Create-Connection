import mysql from "mysql2";

//https://www.youtube.com/watch?v=Hej48pi_lOc MySQL Node.js Express - Sam Meech-Ward

const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "admin123",
    database: "sakila",
  })
  .promise();

const result = await pool.query(`SELECT * FROM actor`);
const rows = result[0];

console.log(rows[2]);
