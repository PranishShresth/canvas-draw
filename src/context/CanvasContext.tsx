import { createContext, FunctionComponent } from "react";

export const canvasContext = createContext(null);

interface Props {
  children: React.ReactChildren;
}
export const CanvasProvider: FunctionComponent<Props> = (props: Props) => {
  return <main className="mainContainer">{props.children}</main>;
};
