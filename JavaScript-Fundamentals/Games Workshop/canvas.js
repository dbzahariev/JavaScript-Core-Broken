let canvas = document.getElementById('can');
let ctx = canvas.getContext('2d');
// ctx.fillRect(30,50,100,100);


ctx.beginPath();	// Start new shape
ctx.moveTo(0, 0);	// Move cursor
ctx.lineTo(100, 100);	// Draw line
ctx.lineTo(10, 100);	// Draw line
ctx.closePath();	// Draw line to start
// ctx.stroke();	// Apply outline
ctx.fill();  		// Fill shape