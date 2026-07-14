import mysql from "mysql2/promise";

// ✅ Database connection using environment variables
const database = await mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "khawa",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
});

export default database;

console.log("✅ Database connected successfully");