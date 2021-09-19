import React, { FunctionComponent } from "react";

const Drawer: FunctionComponent = () => {
  const handleOptionDrag = (event: React.DragEvent) => {
    event.dataTransfer.setData("data", "boi");
  };

  const shapes: string[] = [
    "Circle",
    "Rectangle",
    "Square",
    "Ellipse",
    "Pentagon",
  ];
  return (
    <div className="drawerContainer">
      {shapes.map((shape: string) => {
        return (
          <div
            className="drawerOption"
            draggable={true}
            key={shape}
            id={shape}
            onDragStart={handleOptionDrag}
            onDragOver={(ev) => ev.preventDefault()}
          >
            {shape}
          </div>
        );
      })}
    </div>
  );
};
export default Drawer;
