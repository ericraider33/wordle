$(document).ready(handleDocumentReady);
//	window.onerror = handleErrors;
window.onkeydown = handleKeyDown;

var context;
var wordle = new Wordle({ size: 5, rows: 6 });
console.log(wordle.size);


function handleErrors(msg, url, line, col, error) 
{
	var extra = !col ? '' : '\ncolumn: ' + col;
	extra += !error ? '' : '\nerror: ' + error;
	console.log("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);
	return true;
}

function handleDocumentReady()
{
	console.log('Loading game');
	
	var canvas = $('#main-canvas')[0];
	context = canvas.getContext('2d');	

	animate(); 	
}
		
function handleKeyDown(e)
{
	var key = e.keyCode ? e.keyCode : e.which;
	console.log('Key pressed ' + key);
	/*
	switch (key)
	{
		case 37: moveX(block, false);	break;
		case 38: moveY(block, true);	break;
		case 39: moveX(block, true);	break;
		case 40: moveY(block, false);	break;
	}
	*/
	
	// is a comment
}

function animate() 
{
	context.clearRect(0, 0, 640, 480);



	context.fillStyle = "green";
//	context.fillRect(10, 10, 150, 100);

	wordle.draw(context);
	context.setTransform(1, 0, 0, 1, 0, 0);		// clears transform
	window.requestAnimationFrame(animate);
}		
