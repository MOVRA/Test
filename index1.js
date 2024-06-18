import express from "express";
import superheroes from "superheroes";
import { dirname } from 'path';
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const _dirName = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  let name = superheroes.random();
  res.send(`<h1>Behold, I am ${name}!</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/about', (req, res) => {
  res.sendFile(_dirName + "/public/index.html");
})
