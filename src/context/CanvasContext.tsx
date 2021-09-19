import { createContext, FunctionComponent, useState } from "react";

export interface CanvasState {
  selectedColor: string;
  setSelectedColor: Function;
}
export const CanvasContext = createContext<CanvasState>({
  selectedColor: "#000000",
  setSelectedColor: () => {},
});

interface Props {
  children: React.ReactNode;
}
export const CanvasProvider: FunctionComponent<Props> = (props: Props) => {
  const [selectedColor, setSelectedColor] = useState("#000000");
  return (
    <main className="mainContainer">
      <CanvasContext.Provider
        value={{ selectedColor, setSelectedColor: setSelectedColor }}
      >
        {props.children}
      </CanvasContext.Provider>
    </main>
  );
};
