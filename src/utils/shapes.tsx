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
