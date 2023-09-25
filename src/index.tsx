import ReactDOM from "react-dom";
import App from "./App";

const container = document.getElementById("root");
ReactDOM.hydrate(<App />, container);
