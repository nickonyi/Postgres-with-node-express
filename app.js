import express from "express";
import router from "./routes/useRoutes.js";

const app = express();

//middleware to pass form data
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3030;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Listening at port:${PORT}`);
});
