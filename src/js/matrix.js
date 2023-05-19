import { createBox } from "./box";
import { generateRandom } from "./getRandom";

export let matrix = [];

function addBooms(bombCount) {
  let currrentBombCount = bombCount
  
  const matrixHeight = matrix.length
  const matrixWidth = matrix[0].length;

  while (currrentBombCount) {
    const x = generateRandom(0, matrixWidth - 1);
    const y = generateRandom(0, matrixHeight - 1);

    const matrixElem = matrix[y][x]

    if (!matrixElem) {
      matrix[y][x] = 1
      currrentBombCount--
    }
  }
}

export function createMatrix(width = 8, height = 8, bombCount = 10) {
  matrix = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => 0)
  );

  addBooms(bombCount)

  matrix.forEach((matrixLine, y) => {
    matrixLine.forEach((matrixElem, x) => {
      const newBox = createBox(Boolean(matrixElem), { x, y });

      matrix[y][x] = newBox;
    })
  })
  console.log(matrix);
}

const f = 32
console.log(f);