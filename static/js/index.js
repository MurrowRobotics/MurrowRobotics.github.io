var adjectives = new Array();

adjectives[0] = "Programmers";
adjectives[1] = "Engineers";
adjectives[2] = "Designers";
adjectives[3] = "Marketers";
adjectives[4] = "Artists";
console.log(adjectives);
var counter = 0;

function loop() { 
  if (counter > 4) counter = 0;
  document.getElementById('textslide').firstElementChild.innerHTML = adjectives[counter];
  counter++;
  console.log(counter);
  setTimeout(loop, 2200);
}
loop();
