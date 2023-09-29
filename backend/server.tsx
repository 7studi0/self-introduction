import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

const app: express.Express = express();
const port = 9000;

app.use(express.static("public"));

app.get("/", (req: express.Request, res: express.Response) => {
  const reactApp = ReactDOMServer.renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Server Side Rendered React App</title>
    </head>
    <body>
      <div id="root">${reactApp}</div>
      <script src="bundle.js"></script>
    </body>
    </html>
  `);
});

app.get("/api", (req: express.Request, res: express.Response) => {
  res.json({
    name: "Yusuke Terada",
    profession: "Engineer",
    score: 900,
    email: "yusuke.terada@example.com",
  });
});

app.listen(port, () => {
  console.log(`port ${port} でサーバー起動中`);
});
