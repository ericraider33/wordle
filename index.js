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
	var scaled = wordle.calculateBoxSize($parent.width(), $parent.height());
	
	var canvas = $canvas[0];	
	canvas.width  = scaled.width;				// pallet size
	canvas.height = scaled.height; 				// pallet size
	$canvas.width(scaled.width);				// display size
	$canvas.height(scaled.height);				// display size
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
	wordle.drawBorder(context);
	wordle.drawGrid(context);
	wordle.draw(context);

	//context.fillRect(10, 10, 150, 100);
	context.setTransform(1, 0, 0, 1, 0, 0);		// clears transform
	window.requestAnimationFrame(animate);
}		
