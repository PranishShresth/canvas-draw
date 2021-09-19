export const createSquare = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number
) => {
  ctx.beginPath();
  ctx.rect(x, y, 100, 100);
  ctx.stroke();
};

export const createRectangle = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number
) => {
  ctx.beginPath();
  ctx.rect(x, y, 200, 100);
  ctx.stroke();
};

export const createCircle = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number
) => {
  ctx.beginPath();

  ctx.arc(x, y, 50, 0, 2 * Math.PI);
  ctx.stroke();
};

export const createEllipse = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number
) => {
  ctx.beginPath();
  ctx.ellipse(x, y, 10, 10, 0, 0, Math.PI * 2, true);
  ctx.stroke();
};

export const createTriangle = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number
) => {
  let height = 200 * Math.cos(Math.PI / 6);

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y);
  ctx.lineTo(200, 300 - height);
  ctx.closePath();

  ctx.lineWidth = 10;
  ctx.strokeStyle = "#666666";
  ctx.stroke();
};
