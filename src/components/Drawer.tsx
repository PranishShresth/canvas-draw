import { url } from "inspector";
import React, { FunctionComponent } from "react";
import Circle from "../images/1.PNG";
import Square from "../images/2.PNG";
import Rectangle from "../images/3.PNG";

const Drawer: FunctionComponent = () => {
  const handleOptionDrag = (event: React.DragEvent) => {
    event.dataTransfer.setData("id", event.currentTarget.id);
  };

  interface Shape {
    name: string;
    image: string;
  }
  const shapes: Shape[] = [
    {
      name: "Circle",
      image: Circle,
    },
    {
      name: "Rectangle",
      image: Rectangle,
    },
    {
      name: "Square",
      image: Square,
    },
    {
      name: "Triangle",
      image: "",
    },

    // "Rectangle",
    // "Square",
    // "Ellipse",
    // "Pentagon",
  ];
  console.log(Circle);
  return (
    <div className="drawerContainer">
      {shapes.map((shape: Shape) => {
        return (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            src={shape.image}
            className="drawerOption"
            draggable={true}
            key={shape.name}
            id={shape.name}
            onDragStart={handleOptionDrag}
            onDragOver={(ev) => ev.preventDefault()}
          >
            {/* {shape} */}
          </img>
        );
      })}
    </div>
  );
};
export default Drawer;
