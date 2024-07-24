// scripts.js

let canvas = document.getElementById("sortingCanvas");
let ctx = canvas.getContext("2d");
let array = [];
let arraySize = 50;
let barWidth = canvas.width / arraySize;

function generateArray() {
  array = [];
  for (let i = 0; i < arraySize; i++) {
    array.push(Math.floor(Math.random() * canvas.height));
  }
  drawArray();
}

function drawArray() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < array.length; i++) {
    ctx.fillStyle = "#007BFF";
    ctx.fillRect(i * barWidth, canvas.height - array[i], barWidth, array[i]);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubbleSort() {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        drawArray();
        await sleep(50);
      }
    }
  }
}

async function selectionSort() {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
    drawArray();
    await sleep(50);
  }
}

// Initialize the array and draw it
generateArray();
