import React, {
  FunctionComponent,
  useRef,
  useEffect,
  useState,
  useCallback,
  useLayoutEffect,
  useContext,
} from "react";
import { createRectangle, createSquare } from "./../utils/shapes";
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
        const rect = event.currentTarget.getBoundingClientRect();

        const x = event.clientX - rect.left + 60;
        const y = event.clientY - rect.top + 60;
        if (isDrawing) {
          ctx.lineTo(x, y);
          ctx.closePath();
          ctx.strokeStyle = selectedColor;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.moveTo(x, y);
        }
      }
    },
    [selectedColor, isDrawing]
  );

  const handleArtifactDrop = (event: React.DragEvent) => {
    event.preventDefault();
    console.log("hi");
    const rect = event.currentTarget.getBoundingClientRect();
    const ctx = canvasRef.current?.getContext("2d")!;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const shape = event.dataTransfer.getData("id");
    switch (shape) {
      case "Rectangle":
        createRectangle(ctx, x, y);
        break;
      case "Square":
        createSquare(ctx, x, y);
        break;
      default:
        createSquare(ctx, x, y);
    }
  };

  //   useEffect(() => {}, []);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, [canvasRef]);
  return (
    <div className="canvasContainer">
      <canvas
        id="myCanvas"
        ref={canvasRef}
        onDrop={handleArtifactDrop}
        onMouseDown={handleMouseDown}
        onDragOver={(ev) => ev.preventDefault()}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onDragEnd={(ev: React.DragEvent) => {
          console.log(ev.dataTransfer);
        }}
        onContextMenu={handleContext}
      >
        Your browser does not support the HTML canvas tag.
      </canvas>
    </div>
  );
};

export default Canvas;
