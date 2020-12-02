import React, { Component } from 'react';

class Hangman extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  render() {
    console.log('rendering');

    return (
      <div className="hangman">
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
    this.drawHangman(this.props.drawTo);
  }

  componentDidUpdate() {
    this.drawHangman(this.props.drawTo);
  }

  drawHangman = (drawTo) => {
    console.log('Game Status', this.props.gameStatus);
    console.log('Drawing:', drawTo);
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'rgb(123, 17, 17)';
    ctx.lineWidth = 10;

    // Define each stage of the hangman as function
    const reset = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
    };

    const drawBase = () => {
      ctx.moveTo(350, 400);
      ctx.lineTo(10, 400);
      ctx.stroke();
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

    // Place draw funcs in array then execute function
    // depending on how many wrong guesses we have
    const hangman = [
      reset,
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

    if (this.props.gameStatus === 'new') hangman.forEach((func) => func());
    else hangman[drawTo]();
  };
}

export default Hangman;
