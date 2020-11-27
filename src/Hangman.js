import React, { Component } from 'react';

class Hangman extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  state = {
    attempt: 0
  };

  render() {
    return (
      <div>
        <canvas
          ref={this.canvasRef}
          id="hangman"
          width="400"
          height="500"
        ></canvas>
      </div>
    );
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 15;

    const drawBase = () => {
      ctx.moveTo(350, 400);
      ctx.lineTo(10, 400);
    };

    const drawUpright = () => {
      ctx.moveTo(60, 400);
      ctx.lineTo(60, 10);
      ctx.stroke();
    };

    const drawBeam = () => {
      ctx.lineTo(250, 10);
      ctx.stroke();
    };

    const drawNoose = () => {
      ctx.lineTo(250, 60);
      ctx.stroke();
    };

    const drawHead = () => {
      ctx.beginPath();
      ctx.arc(250, 90, 30, 0, 2 * Math.PI);
      ctx.stroke();
    };

    const drawBody = () => {
      ctx.moveTo(250, 120);
      ctx.lineTo(250, 250);
      ctx.stroke();
    };

    const drawLeg1 = () => {
      ctx.lineTo(200, 325);
      ctx.stroke();
    };

    const drawLeg2 = () => {
      ctx.moveTo(250, 250);
      ctx.lineTo(300, 325);
      ctx.stroke();
    };

    const drawArm1 = () => {
      ctx.moveTo(250, 150);
      ctx.lineTo(200, 225);
      ctx.stroke();
    };

    const drawArm2 = () => {
      ctx.moveTo(250, 150);
      ctx.lineTo(300, 225);
      ctx.stroke();
    };

    const hangman = [
      drawBase,
      drawUpright,
      drawBeam,
      drawNoose,
      drawHead,
      drawBody,
      drawLeg1,
      drawLeg2,
      drawArm1,
      drawArm2
    ];

    hangman.forEach((drawFunc) => {
      drawFunc();
    });
  }
}

export default Hangman;
