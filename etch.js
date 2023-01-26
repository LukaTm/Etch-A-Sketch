const container = document.getElementById("start");
const gridSize = document.getElementById("grid-size");
const mouseHover = document.getElementsByClassName('grid-square');


const input = prompt('Grid size')


container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
container.style.gridTemplateRows = `repeat(${input}, 1fr)`;
function gridSizeInput(){
    return input * input;
}


for (let i = 0; i < gridSizeInput(); i++) {
  let div = document.createElement("div");
  div.classList.add("grid-square");
  container.appendChild(div);
}


function color(square){
    return square.style.backgroundColor = 'red'
}

for (let i = 0; i < mouseHover.length; i++) {
    mouseHover[i].addEventListener('mouseover', () => color(mouseHover[i]));
}
