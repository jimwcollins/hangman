import React, { useRef, useEffect } from 'react';

const LineTest = (props) => {
  const canvasRef = useRef(null);

  const draw = (ctx, animPercentage) => {
    ctx.moveTo(350, 400);

    let startX = 350;
    const targetX = 10;

    const difference = targetX - startX;
    const currentX = startX + difference * (animPercentage / 100);

    console.log('currentX', currentX);

    ctx.lineTo(currentX, 400);
    ctx.stroke();
  };

  // const drawCircle = (ctx, frame) => {
  //   const endAngle = (frame / 30) * Math.PI;

  //   ctx.beginPath();
  //   ctx.arc(250, 90, 30, 0, endAngle);
  //   ctx.stroke();
  // };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'rgb(123, 17, 17)';
    ctx.lineWidth = 10;

    let animPercentage = 0;
    let animFrameId;

    const render = () => {
      animPercentage++;
      draw(ctx, animPercentage);
      if (animPercentage < 100)
        animFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animFrameId);
    };
  });

  return (
    <canvas ref={canvasRef} id="hangman" width="400" height="500"></canvas>
  );
};

export default LineTest;
