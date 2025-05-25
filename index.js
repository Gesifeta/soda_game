import { collections } from "./game_data.js";

const reshufled = [];
function reshufle() {
  for (let i = 0; i < collections.length; i++) {
    let random = (Math.random() * collections.length).toFixed(0);
    if (reshufled.find((item) => item === reshufled[Number(random)]) !== -1) {
      reshufled[random] = collections[i];
    }
    while (
      reshufled[Number(random)] !== undefined &&
      reshufled.length < collections.length
    ) {
      if (random > collections.length - 1) {
        random = 0;
      }
      random = (Math.random() * collections.length).toFixed(0);
    }
    reshufled[Number(random)] = collections[i];
  }
}
let score = 0;
let totalPrize = 0;
reshufle();
// allow dragg
function allowDragg(e) {
  e.preventDefault();
}
// drop the item
function dropItem(e, item_id, prize) {
  e.preventDefault();
  let item = e.dataTransfer.getData("text");
  e.target.style.backgroundColor = "inherit";
  if (item_id === item) {
    e.target.appendChild(document.getElementById(item));
    score++;
    document.getElementById("game-score").textContent = score;
    totalPrize += Number(prize);
  } else {
    let temp = document.getElementById("game-score").textContent;
    document.getElementById("game-score").style.color = "red";
    document.getElementById("game-score").textContent = "X";
    const time = setTimeout(() => {
      document.getElementById("game-score").textContent = temp;
      document.getElementById("game-score").style.color = "green";
    }, 500);
  }
  if (score !== 0 && reshufled.length == score) {
    document.getElementById("game-score").textContent = "WON!";
  }
}
// set on drag start
function startDragg(e) {
  e.dataTransfer.setData("text", e.target.id);
  e.target.classList.add("drag-start");
}
// set on drag leave
function dragLeaves(e) {
  e.preventDefault();
  e.target.style.border = "1px dotted gray";
  e.target.style.backgroundColor = "inherit";
}
// set on dragg enter
function draggEnter(e) {
  e.preventDefault();
  e.target.style.border = "2px dashed green";
  e.target.style.backgroundColor = "lightgray";
}
document.addEventListener("DOMContentLoaded", () => {
  const collectionSoda = document.querySelector(".container-collections");

  collections.map((collection, index) => {
    let bottle = document.createElement("div");
    collectionSoda?.append(bottle);
    let collectionImage = document.createElement("img");
    collectionImage.setAttribute("draggable", "true");
    collectionImage.src = collection.image;
    collectionImage.id = `${collection.id}`;
    collectionSoda?.append(collectionImage);
    collectionImage.ondragstart = (e) => startDragg(e);
    collectionImage.ondragleave = (e) => dragLeaves(e);
  });

  for (let item in reshufled) {
    typeof item != "string" && reshufled.splice(reshufled.indexOf(item), 1);
  }
  reshufled.forEach((item) => {
    const playerStack = document.querySelector(".container-stacks");
    let play_card = document.createElement("div");
    let playStackImage = document.createElement("div");
    playStackImage.style.minWidth = "100px";
    playStackImage.style.minHeight = "150px";
    playStackImage.style.borderTopLeftRadius = "12px";
    playStackImage.style.borderTopRightRadius = "12px";
    playStackImage.style.border = "1px dotted gray";
    playStackImage.id = `${item.id}`;
    playerStack.append(play_card);
    play_card.append(playStackImage);
    playStackImage.ondragover = (e) => allowDragg(e);
    playStackImage.ondragleave = (e) => dragLeaves(e);
    playStackImage.ondragenter = (e) => draggEnter(e);
    playStackImage.ondrop = (e) => {
      dropItem(e, playStackImage.id, item.prize);
      document.getElementById("prize").textContent =
        "Your prize: $" + totalPrize.toLocaleString("us", "currency");
    };
  });
});
