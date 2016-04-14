function isSolved(board) {
   if(/XXX......|...XXX...|......XXX|X..X..X|X...X...X|..X.X.X../.test(board.join(''))) return 'XXX';
   if(/OOO......|...OOO...|......OOO|O..O..O|O...O...O|..O.O.O../.test(board.join(''))) return 'OOO';
   if(board.every(function(x) {x === 'X' || x === 'O'})) return 'BORING';
}
  for (i = 0; i < 9; i++) {
    document.getElementsByClassName('square')[i].addEventListener('click',function() {
    if (!this.textContent) {
      var board = [];
      this.textContent = document.getElementById('turn').textContent === 'X' ? 'X' : 'O';
      document.getElementById('turn').textContent = document.getElementById('turn').textContent === 'X' ? 'O' : 'X';
      for (i = 0; i < 9; i++) board.push(document.getElementsByClassName('square')[i].textContent || ' ');
      if (isSolved(board)) {
      	document.getElementById('turn').textContent = isSolved(board);
        setTimeout(function(){ document.getElementById('turn').textContent = 'X'}, 1000);
      	for (i = 0; i < 9; i++) document.getElementsByClassName('square')[i].textContent = '';
      }
    }
  });
}