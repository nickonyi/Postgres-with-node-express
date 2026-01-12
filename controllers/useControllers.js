import path from "path";
import url from "url";

const __fileName = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

export const getUsers = (req, res) => {
  console.log("usernames will be logged here - wip");
  res.send("Check the terminal for usernames.");
};

export const showNewForm = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};

export const createUser = (req, res) => {
  console.log("username to be saved:", req.body.username);
  res.send("Username received. Check the terminal.");
};
