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

    let mouseHover = document.getElementsByClassName('grid-square');
    for (let i = 0; i < mouseHover.length; i++) {
        mouseHover[i].addEventListener('mouseover', () => color(mouseHover[i]));
    }
});


function gridSizeInput(){
    return input * input;
}


// Random Color
function color(square){
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    RGB_COLOR = `rgb(${randomR}, ${randomG}, ${randomB})`
    return square.style.backgroundColor = RGB_COLOR;
}


