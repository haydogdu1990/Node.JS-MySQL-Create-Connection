import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

//https://www.youtube.com/watch?v=Hej48pi_lOc MySQL Node.js Express - Sam Meech-Ward

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

async function getNotes() {
  const [rows] = await pool.query(`SELECT * FROM actor`);
  return rows;
}

async function getActor(id) {
  const [rows] = await pool.query(
    `
  SELECT *
  FROM actor
  WHERE actor_id=?
  `,
    [id]
  );
  return rows[0];
}

const actor = await getActor(202);

console.log(actor);

async function createActor(firstname, lastname) {
  const result = await pool.query(
    `INSERT INTO actor (first_name, last_name) VALUES (?, ?)`,
    [firstname, lastname]
  );
  return result;
}

const result = await createActor("test", "test");
console.log(result);
