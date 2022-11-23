class Wordle 
{
	constructor(argument)
	{
		this.size = argument.size;
		this.rows = argument.rows;
		this.currentRow = 0;
		this.currentCol = 0;
		this.data = [];

		for (var i = 0; i < this.rows; i++)
		{
			var row = [];
			this.data[i] = row;
			
			for (var j = 0; j < this.size; j++)
			{
				row[j] = i.toString() + j.toString();
			}
		}
	}

	draw(context)
	{
		for (var i = 0; i < this.rows; i++)
		{
			var row = this.data[i];
			
			for (var j = 0; j < this.size; j++)
			{
				var text = row[j];
				context.fillText(text, j*20, i*10+10);
			}
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