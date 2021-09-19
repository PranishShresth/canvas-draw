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
  const [startLine, setStartLine] = useState(40);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  const handleContext = () => {
    // alert("ehll");
  };
  const handleMouseUp = useCallback((event: React.MouseEvent) => {
    setIsDrawing(false);
  }, []);

  const handleMouseDown = useCallback((event: React.MouseEvent) => {
    const ctx = canvasRef.current?.getContext("2d")!;
    ctx.beginPath();

    setIsDrawing(true);
  }, []);
  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      //   setStartLine(startLine);
      if (canvasRef.current) {
        const ctx = canvasRef.current?.getContext("2d")!;
        if (isDrawing) {
          ctx.lineTo(event.clientX, event.clientY);
          ctx.closePath();
          ctx.strokeStyle = selectedColor;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.moveTo(event.clientX, event.clientY);
        }
      }
    },
    [selectedColor, isDrawing]
  );
  //   useEffect(() => {}, []);

  //   useLayoutEffect(() => {
  //     const canvas = canvasRef.current;
  //     if (canvas) {
  //       canvas.width = window.innerWidth;
  //       canvas.height = window.innerHeight;
  //     }
  //   }, [canvasRef]);
  return (
    <div className="canvasContainer">
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
