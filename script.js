// Bring down the boxes container and the button
const boxesContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => boxesContainer.classList.toggle("big"));

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      // Construct those 16 boxes
      const box = document.createElement("div");
      //   console.log(box);
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();
