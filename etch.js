const container = document.getElementById("start");
const button = document.getElementsByClassName("grid-size")[0];



button.addEventListener("click", function() {
    input = prompt("Grid Size:");
    container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${input}, 1fr)`;
    for (let i = 0; i < gridSizeInput(); i++) {
        let div = document.createElement("div");
        div.classList.add("grid-square");
        container.appendChild(div);
      }
    mouseHover = document.getElementsByClassName('grid-square');
    for (let i = 0; i < mouseHover.length; i++) {
        mouseHover[i].addEventListener('mouseover', () => color(mouseHover[i]));
    }
});


function gridSizeInput(){
    return input * input;
}

function color(square){
    return square.style.backgroundColor = 'red'
}


