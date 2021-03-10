import React, { useState } from 'react';
import AnimCanvas from './AnimCanvas';

const drawStages = [
  {}, // New Game
  { moveTo: [350, 400], line: [-340, 0] }, // Base
  { moveTo: [60, 400], line: [0, -390] }, // Upright
  { moveTo: [56, 10], line: [198, 0] }, // Beam
  { moveTo: [250, 10], line: [0, 50] }, // Noose
  { moveTo: [250, 60], circle: [250, 90, 30] }, // Head
  { moveTo: [250, 120], line: [0, 130] }, // Body
  { moveTo: [250, 250], line: [-50, 75] }, // Leg 1
  { moveTo: [250, 250], line: [50, 75] }, // Leg 2
  { moveTo: [250, 150], line: [-50, 75] }, // Arm 1
  { moveTo: [250, 150], line: [50, 75] }, // Arm 2
];

const Hangman = ({ drawTo, className }) => {
  const [canvasSize] = useState({ width: 360, height: 410 });

  // The draw function draws each stage depending on data from the drawStage array
  // and the current stage, provided by the main game or by the animation useEffect on home page
  // We pass this to be drawn by our AnimCanvas component
  const draw = (ctx, frame) => {
    if (drawTo === 0) {
      ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
      ctx.beginPath();
      return;
    }

    const toDraw = drawStages[drawTo];

    ctx.strokeStyle = 'rgb(123, 17, 17)';
    ctx.lineWidth = 7;

    if (toDraw.line) drawLine(ctx, frame, toDraw);
    if (toDraw.circle) drawCircle(ctx, frame, toDraw);
  };

  // Draw a certain amount of the required line depending on
  // the frame given to us by the animated canvas
  const drawLine = (ctx, frame, toDraw) => {
    const [moveToX, moveToY] = toDraw.moveTo;
    ctx.moveTo(moveToX, moveToY);

    const [diffX, diffY] = toDraw.line;
    const currentX = moveToX + diffX * (frame / 60);
    const currentY = moveToY + diffY * (frame / 60);

    ctx.lineTo(currentX, currentY);
    ctx.stroke();
  };

  const drawCircle = (ctx, frame, toDraw) => {
    const [centerX, centreY, radius] = toDraw.circle;
    const endAngle = (frame / 30) * Math.PI;

    ctx.beginPath();
    ctx.arc(centerX, centreY, radius, 0, endAngle);
    ctx.stroke();
  };

  return (
    <AnimCanvas draw={draw} canvasSize={canvasSize} className={className} />
  );
};

export default Hangman;
