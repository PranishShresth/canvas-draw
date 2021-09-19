import React, { FunctionComponent } from "react";

const Drawer: FunctionComponent = () => {
  const handleOptionDrag = (event: React.DragEvent) => {
    event.dataTransfer.setData("data", "boi");
  };
  return (
    <div className="drawerContainer">
      <div
        className="drawerOption"
        draggable={true}
        onDragStart={handleOptionDrag}
        onDragOver={(ev) => ev.preventDefault()}
      >
        Rectangle
      </div>
    </div>
  );
};
export default Drawer;
