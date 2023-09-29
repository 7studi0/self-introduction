"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = __importDefault(require("react-dom/server"));
const app = (0, express_1.default)();
const port = 9000;
app.get("/", (req, res) => {
    const reactApp = server_1.default.renderToString(/>);, res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Server Side Rendered React App</title>
    </head>
    <body>
      <div id="root">${reactApp}</div>
    </body>
    </html>
  `));
});
app.get("/api", (req, res) => {
    res.json({
        name: "Yusuke Terada",
        profession: "Engineer",
        score: 900,
        email: "yusuke.terada@example.com"
    });
});
app.listen(port, () => {
    console.log(`port ${port} でサーバー起動中`);
});
