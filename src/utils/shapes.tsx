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
};
