import React, { FunctionComponent } from "react";

const Drawer: FunctionComponent = () => {
  const handleOptionDrag = (event: React.DragEvent) => {
    event.dataTransfer.setData("datas", event.currentTarget.id);
  };
  return (
    <div className="drawerContainer">
      <div className="drawerOption" draggable={true} onDrag={handleOptionDrag}>
        Rectangle
      </div>
    </div>
  );
};
export default Drawer;
