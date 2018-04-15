'use strict';

function Plotter($canvas) {
   let that = this;
   let canvas = $canvas[0];
   let ctx = canvas.getContext('2d');
   let width = 0;
   let height = 0;
   function updateCanvasSize() {
       width = $canvas.width();
       height = $canvas.height();
       canvas.width = width;
       canvas.height = height;
       console.log('we are updating canvas size');
   }
   $(window).on('resize', () => {
       updateCanvasSize();
   })
   updateCanvasSize();
   
   function clearCanvas() {
    ctx.fillStyle='rgba(255,255,255,0.5)';
    ctx.fillRect(0, 0, width, height);
   }
   
   that.plot = function(array) {
    clearCanvas()
    ctx.strokeStyle = '#f00'
    ctx.beginPath();
    
    ctx.moveTo(0,0);

    let minY = -32768;
    let totalY = 65536;
    let totalX = array.length;

    for (let i = 0; i < array.length; i += 10) {
      let valueY = array[i+1];
      let ratioY = (valueY - minY) / totalY;
      let plotterY = ratioY * height;
      
      //let plotterY = (Math.sin(i/1000)/2+0.5) * height;
      
      let valueX = i;
      let ratioX = valueX / totalX;
      let plotterX = ratioX * width;
      ctx.lineTo(plotterX, plotterY);
    }
    
    //ctx.moveTo(300,0);
    //ctx.lineTo(0,300);
    ctx.stroke();

   }
}

module.exports = Plotter;
