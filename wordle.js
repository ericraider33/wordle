class Wordle 
{
	constructor(argument)
	{
		this.size = argument.size;
		this.rows = argument.rows;
		this.currentRow = 0;
		this.currentCol = 0;
		this.data = [];

		for (var row = 0; row < this.rows; row++)
		{
			var line = [];
			this.data[row] = line;
			
			for (var col = 0; col < this.size; col++)
			{
				line[col] = row.toString() + col.toString();
			}
		}
	}

	calculateBoxSize(width, height)
	{
		// Trims to whole number
		width -= width % this.size;			
		height -= height % this.rows;

		this.boxSize = Math.min(width / this.size, height / this.rows);
		this.width = this.boxSize * this.size;
		this.height = this.boxSize * this.rows;

		return { width: this.width, height: this.height };
	}

	draw(context)
	{
		for (var row = 0; row < this.rows; row++)
		{
			var line = this.data[row];
			
			for (var col = 0; col < this.size; col++)
			{
				var text = line[col];
				context.fillText(text, col*this.boxSize, row*this.boxSize+10);
			}
		}
	}

	drawBorder(context)
	{
		context.fillStyle = "green";
		context.lineWidth = 1;
		context.beginPath(); 
		context.moveTo(0, 0); 
		context.lineTo(this.width-1, 0);
		context.lineTo(this.width-1, this.height-1);
		context.lineTo(0, this.height-1);
		context.lineTo(0, 0); 
		context.stroke(); 		
	}

	drawGrid(context)
	{
		for (var row = 0; row < this.rows; row++)
		{	
			var y = row * this.boxSize;
			context.lineWidth = 1;
			context.beginPath();
			context.moveTo(0, y);
			context.lineTo(this.width, y);
			context.stroke();
		}

		for (var col = 0; col < this.size; col++)
		{
			var x = col * this.boxSize;
			context.lineWidth = 1;
			context.beginPath();
			context.moveTo(x, 0);
			context.lineTo(x, this.height);
			context.stroke();
		}
	}

	setLetter(letter)
	{
		var row = this.data[this.currentRow];
		row[this.currentCol] = letter;
		this.currentCol = this.currentCol + 1;
		if (this.currentCol === this.size)
			this.currentCol = this.currentCol - 1;
	}

	nextLine()
	{
		this.currentRow = this.currentRow + 1;
		this.currentCol = 0; 
	}
}