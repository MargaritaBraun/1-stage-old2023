import { getAllNeighbors, appElem } from "./matrix";
class Box {
  constructor(isBomb, coordinates) {
    this.isBomb = isBomb
    this.coordinates = coordinates
  }
  setBoxValue(value) {
    this.value = value
  }

  setBoxType() {
    const allNeighbors = getAllNeighbors(this.coordinates)
    let bombCount = 0
    allNeighbors.forEach(neighbor => {
      if (neighbor === 1 || neighbor.isBomb) {
        bombCount++
      }
    })

    if (bombCount) {
      this.setBoxValue(bombCount);
    }
  }
  createBoxOnArea() {
    const boxElem = document.createElement('div')
    boxElem.classList.add('box')
    boxElem.innerHTML = this.value || ' '
    if (this.value) {
      boxElem.classList.add(`box-count-${this.value}`);
    }
    
    this.boxElem = boxElem

    appElem.appendChild(boxElem)
  }
}

export function createBox(isBomb, coordinates) {
  const newBox = new Box(isBomb, coordinates);

  newBox.setBoxType();
  newBox.createBoxOnArea()

  return newBox
}