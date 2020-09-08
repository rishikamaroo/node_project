import express from "express";
import { find } from "../controller/recipeController";

const app = express();

const port = 3000;
app.get("/", (req, res) => {
    const str = find();
    console.log(JSON.stringify(str));
    res.send(str + "Yey, Welcome to Salt & Sugar Company!");
});

app.get("/:tenant", (req, res) => {
    res.send("Welcome to Salt & Sugar Company tenants!");
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
