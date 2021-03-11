import React, { useState } from 'react';
import AnimCanvas from './AnimCanvas';

const drawWidth = 6;

const drawStages = [
  {}, // New Game
  { moveTo: [320, 400], line: [-320, 0], width: 10 }, // Base
  { moveTo: [50, 400], line: [0, -390], width: 10 }, // Upright
  { moveTo: [100, 400], line: [-50, -50], width: 10 }, // Support Bottom
  { moveTo: [25, 10], line: [250, 0], width: 10 }, // Beam
  { moveTo: [100, 10], line: [-50, 50], width: 10 }, // Support Top
  { moveTo: [220, 10], line: [0, 50], width: drawWidth }, // Noose
  { moveTo: [220, 60], circle: [220, 90, 30], width: drawWidth }, // Head
  { moveTo: [220, 120], line: [0, 130], width: drawWidth }, // Body
  { moveTo: [220, 250], line: [-50, 75], width: drawWidth }, // Leg 1
  { moveTo: [220, 250], line: [50, 75], width: drawWidth }, // Leg 2
  { moveTo: [220, 150], line: [-50, 75], width: drawWidth }, // Arm 1
  { moveTo: [220, 150], line: [50, 75], width: drawWidth }, // Arm 2
];

const Hangman = ({ drawTo, className }) => {
  const [canvasSize] = useState({ width: 320, height: 410 });

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

    if (toDraw.line) drawLine(ctx, frame, toDraw);
    if (toDraw.circle) drawCircle(ctx, frame, toDraw);
  };

  // Draw a certain amount of the required line depending on
  // the frame given to us by the animated canvas
  const drawLine = (ctx, frame, toDraw) => {
    ctx.lineWidth = toDraw.width;
    const [moveToX, moveToY] = toDraw.moveTo;
    ctx.moveTo(moveToX, moveToY);

    const [diffX, diffY] = toDraw.line;
    const currentX = moveToX + diffX * (frame / 60);
    const currentY = moveToY + diffY * (frame / 60);

    ctx.lineTo(currentX, currentY);
    ctx.stroke();
  };

  const drawCircle = (ctx, frame, toDraw) => {
    ctx.lineWidth = toDraw.width;
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
