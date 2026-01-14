import { Pool } from "pg";

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
const pool = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "phantommobb",
  database: "top_users",
  password: "admin123",
  port: 5432, // default PostgreSQL port
});

export default pool;
