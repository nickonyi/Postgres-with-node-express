import pool from "./pool.js";

export const getAllUserNames = async () => {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
};

export const searchUserNames = async (search) => {
  const { rows } = await pool.query(
    `
      SELECT username
      FROM usernames
      WHERE username ILIKE $1
    `,
    [`%${search}%`]
  );
  return rows;
};

export const insertUsername = async (username) => {
  await pool.query("INSERT INTO usernames (username) VALUES($1)", [username]);
};

export const deleteAllUsernames = async () => {
  await pool.query("DELETE FROM usernames");
};
