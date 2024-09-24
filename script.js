'use strict';
// please do not delete the 'use strict' line above

const colors = ['#ffffff', '#ff9999', '#ff99cc', '#ff99ff', '#cc99ff', '#9999ff', '#99ccff', '#99ffff', '#99ffcc', '#99ff99', '#ccff99', '#ffff99', '#ffcc99'];
let bodyColor = 0;

function changeColor(){
  bodyColor = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[bodyColor];
  console.log('Button clicked!'); // feel free to change/delete this line
}

document.getElementById('color-button').addEventListener('click', changeColor)
