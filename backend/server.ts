import express from "express";

const app: express.Express = express();
const port = 9000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello, world!");
});

app.get("/api", (req: express.Request, res: express.Response) => {
  res.json({
    name:"Yusuke Terada",
    profession:"Engineer",
    score:900,
    email:"yusuke.terada@example.com"
  });
});

app.listen(port, () => {
  console.log(`port ${port} でサーバー起動中`);
});