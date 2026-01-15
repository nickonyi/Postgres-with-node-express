import path from "path";
import url from "url";
import {
  getAllUserNames,
  insertUsername,
  searchUserNames,
  deleteAllUsernames,
} from "../db/queries.js";

const __fileName = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

export const getUsers = async (req, res) => {
  const search = req.query.search;
  let usernames;

  if (search) {
    usernames = await searchUserNames(search);
  } else {
    usernames = await getAllUserNames();
  }

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

export const deleteUsernames = async (req, res) => {
  await deleteAllUsernames();
  res.status(200).send("successfully deleted!");
};
