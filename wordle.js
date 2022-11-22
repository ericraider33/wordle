function Wordle(argument) {
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
			row[j] = j.toString();
		}
	}

	this.draw = draw;
	return this;

	function draw(context)
	{
		for (var i = 0; i < this.rows; i++)
		{
			var row = this.data[i];
			
			for (var j = 0; j < this.size; j++)
			{
				var text = row[j];
				context.fillText(text, j*10, i*10);
			}
		}
	}
}