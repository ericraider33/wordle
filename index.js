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
	
	var $canvas = $('#main-canvas');
	var $parent = $canvas.parent();
	var available = { x: $parent.width(), y: $parent.height() };
	var scaled = { x: available.y / 6 * 5, y: available.y };
	
	var canvas = $canvas[0];	
	canvas.width  = 500;				// pallet size
	canvas.height = 600; 				// pallet size
	$canvas.width(scaled.x);			// display size
	$canvas.height(scaled.y);			// display size
	$canvas.show();
	
	context = $canvas[0].getContext('2d');	

	animate(); 	
}
		
function handleKeyDown(e)
{
	var key = e.keyCode ? e.keyCode : e.which;
	console.log('Key pressed ' + key);
	
	switch (key)
	{
		case 13:
		 	wordle.nextLine();
		 	break;

		default:
			var letter = String.fromCharCode(key);
			wordle.setLetter(letter);
			break;
	}
	
	
}

function animate() 
{
	context.clearRect(0, 0, 640, 480);



	context.fillStyle = "green";
	context.fillRect(10, 10, 150, 100);

	wordle.draw(context);
	context.setTransform(1, 0, 0, 1, 0, 0);		// clears transform
	window.requestAnimationFrame(animate);
}		
