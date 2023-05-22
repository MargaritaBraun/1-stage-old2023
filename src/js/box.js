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
    
    if (this.isBomb) {
      this.setBoxValue("💣");
      return
    }
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
  onBoxClick() {
    if (!this.value) {
      this.isOpenned = true;
      this.boxElem.classList.remove('initial')
      const allNeighbors = getAllNeighbors(this.coordinates)

      allNeighbors.forEach((neighbor) => {
        if (!neighbor.value && !neighbor.isOpenned) {
          neighbor.onBoxClick();
        }
      })
    }
  }

  createBoxOnArea() {
    const boxElem = document.createElement('div')
    boxElem.classList.add('box')
    boxElem.classList.add("initial");
    boxElem.innerHTML = this.value || ' '
    if (this.value) {
      boxElem.classList.add(`bomb-count-${this.value}`);
    }
    
    this.boxElem = boxElem
    this.boxElem.addEventListener("click", this.onBoxClick.bind(this));
    appElem.appendChild(boxElem)
  }
}

export function createBox(isBomb, coordinates) {
  const newBox = new Box(isBomb, coordinates);

  newBox.setBoxType();
  newBox.createBoxOnArea()

  return newBox
}