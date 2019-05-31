function tri(){
  var hypotenuse=parseInt(document.getElementById('hypotenuse').value);
  var opposite=parseInt(document.getElementById('opposite').value);
  var adjascent=parseInt(document.getElementById('adjascent').value);
  if((adjascent+hypotenuse)<=opposite || (hypotenuse+opposite)<=adjascent || (opposite+adjascent)<=hypotenuse
 || (adjascent===0||hypotenuse===0||opposite==0)){
  alert("Not a triangle") ;}
else if(adjascent===hypotenuse && hypotenuse===opposite && adjascent===opposite){
  alert("Equilateral triangle");}
  else if(adjascent===hypotenuse || hypotenuse===opposite || opposite===adjascent){
  alert("Isosceles triangle");}
  else if(adjascent!==hypotenuse||hypotenuse!==opposite||opposite!==adjascent){
  alert("Scalene triangle");
}
}
