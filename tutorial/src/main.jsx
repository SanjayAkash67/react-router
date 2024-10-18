import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./main.css";

let rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import * as jsonfile from "jsonfile";

async function readData() {
  const data = await jsonfile.readFile(
    "C:UserssanjaOneDriveDesktopProject\react-router\tutorial\tsconfig.json"
  );
  console.log(data);
}

async function writeData() {
  await jsonfile.writeFile(
    "C:UserssanjaOneDriveDesktopProject\react-router\tutorial\tsconfig.json",
    { key: "value" }
  );
}
