/*
  AnimCanvas draws the supplied draw function onto a
  canvas, requesting a new animation frame until we've
  reached 100% of the animation
*/

import React, { useEffect, useRef } from 'react';

function AnimCanvas({ draw }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let frame = 0;
    let animFrameId;

    const render = () => {
      frame++;
      draw(ctx, frame);
      if (frame < 60) animFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animFrameId);
    };
  });

  return (
    <canvas ref={canvasRef} id="hangman" width="400" height="500"></canvas>
  );
}

export default AnimCanvas;
