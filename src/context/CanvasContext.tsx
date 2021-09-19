import { createContext, FunctionComponent, useState } from "react";

interface IContext {
  color?: string;
  setColor?: React.Dispatch<React.SetStateAction<string>>;
}
export const CanvasContext = createContext<IContext | null>(null);

interface Props {
  children: React.ReactNode;
}
export const CanvasProvider: FunctionComponent<Props> = (props: Props) => {
  const [color, setColor] = useState<string>("#000000");
  return (
    <main className="mainContainer">
      <CanvasContext.Provider value={{ color, setColor }}>
        {props.children}
      </CanvasContext.Provider>
    </main>
  );
};
