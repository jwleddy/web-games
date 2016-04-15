function isSolved(b) {
   if(/XXX.{6}|...XXX...|.{6}XXX|X..X..X|X...X...X|..X.X.X../.test(b)) return 'XXX';
   if(/OOO.{6}|...OOO...|.{6}OOO|O..O..O|O...O...O|..O.O.O../.test(b)) return 'OOO';
   if(/[XO]{9}/.test(b)) return 'BORING';
}
for (i=0,s=document.querySelectorAll('.square'),t=document.querySelector('#turn');i<9;i++){
  s[i].addEventListener('click',function(){
    if(!this.textContent){
      this.textContent=t.textContent=='X'?'X':'O';
      t.textContent=t.textContent=='X'?'O':'X';
      for(i=0,b='';i<9;i++)b+=(s[i].textContent||0);
      if(isSolved(b)){
      	t.textContent=isSolved(b);
        setTimeout(function(){t.textContent='X'},1000);
      	for(i in s)s[i].textContent='';
      }
    }
  });
}