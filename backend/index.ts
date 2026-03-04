import express from "express";
import StatusCodes from "http-status-codes";
const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.status(StatusCodes.ACCEPTED).send("HELLO WORLD");
});

// app.use("/api");

app.listen(PORT, () => {
  console.log(`Server is listening at PORT: ${PORT}`);
});
