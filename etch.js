const container = document.getElementById("start");

for (let i = 0; i < 256; i++) {
  let div = document.createElement("div");
  div.classList.add("grid-square");
  container.appendChild(div);
}