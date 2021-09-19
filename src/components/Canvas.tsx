import React, {
  FunctionComponent,
  useRef,
  useEffect,
  useState,
  useCallback,
  useLayoutEffect,
  useContext,
} from "react";

import { CanvasContext } from "../context/CanvasContext";

type MousePos = [number, number];
const Canvas: FunctionComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { selectedColor } = useContext(CanvasContext);
  const [mousePos, setMousePos] = useState<MousePos>([0, 0]);

  const handleContext = () => {
    // alert("ehll");
  };
  const handleMouseUp = useCallback((event: React.MouseEvent) => {
    // setMousePos([event.pageX, event.pageY]);
  }, []);

  const handleMouseDown = useCallback((event: React.MouseEvent) => {}, []);
  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      if (canvasRef.current) {
        const ctx = canvasRef.current?.getContext("2d")!;
        ctx.strokeStyle = selectedColor;
        ctx?.lineTo(event.clientX, event.clientY);
        ctx?.stroke();
      }
    },
    [canvasRef, selectedColor]
  );
  useEffect(() => {}, []);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, [canvasRef]);
  return (
    <div className="wrapper">
      <canvas
        id="myCanvas"
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onContextMenu={handleContext}
      >
        Your browser does not support the HTML canvas tag.
      </canvas>
    </div>
  );
};

export default Canvas;
