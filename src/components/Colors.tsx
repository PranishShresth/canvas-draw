import { FunctionComponent, useContext } from "react";
import { CanvasContext } from "./../context/CanvasContext";
const Colors: FunctionComponent = () => {
  const { setSelectedColor } = useContext(CanvasContext);

  const colors: string[] = [
    "#FFFFFF",
    "#C0C0C0",
    "#808080",
    "#000000",
    "#FF0000",
    "#800000",
    "#FFFF00",
    "#808000",
    "#00FF00",
    "#008000",
    "#00FFFF",
    "#008080",
    "#0000FF",
    "#000080",
    "#FF00FF",
    "#800080",
  ];

  return (
    <div className="colorContainer">
      {colors.map((color: string) => {
        return (
          <div
            style={{
              background: color,
              width: 50,
              height: 50,
              border: "1px solid black",
              cursor: "pointer",
            }}
            onClick={() => {
              setSelectedColor(color);
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Colors;
