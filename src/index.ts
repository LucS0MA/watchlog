import express from "express";

const app = express();
const port = process.env.PORT ?? 3000;

app.get("/", (_req, res) => {
  res.send("API boilerplate");
});

app.listen(port, () => {
  console.log("BoilerPlate API app is listenning on port 3000 !");
});
