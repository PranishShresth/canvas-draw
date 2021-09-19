import React, { FunctionComponent } from "react";
import Canvas from "./components/Canvas";
import Colors from "./components/Colors";
import Drawer from "./components/Drawer";
import { CanvasProvider } from "./context/CanvasContext";

import "./App.css";

const App: FunctionComponent = () => {
  return (
    <CanvasProvider>
      <Drawer />
      <Canvas />
      <Colors />
    </CanvasProvider>
  );
};

export default App;
