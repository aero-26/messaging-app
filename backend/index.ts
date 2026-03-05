import express from "express";
import StatusCodes from "http-status-codes";
import router from "./src/routes";
const PORT = process.env.PORT;
const app = express();

app.get("/ping", (req, res) => {
  res.status(StatusCodes.ACCEPTED).send("pong");
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is listening at PORT: ${PORT}`);
});
