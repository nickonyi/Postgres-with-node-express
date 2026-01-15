import path from "path";
import url from "url";
import { getAllUserNames, insertUsername } from "../db/queries.js";

const __fileName = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

export const getUsers = async (req, res) => {
  const usernames = await getAllUserNames();
  console.log("usernames:", usernames);

  res.send("usernames: " + usernames.map((user) => user.username).join(", "));
};

export const showNewForm = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};

export const createUser = async (req, res) => {
  const { username } = req.body;
  await insertUsername(username);
  res.redirect("/");
};
