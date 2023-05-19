class Box {
  constructor() {
    this.isBomb = isBomb
    this.coordinates = coordinates
  }
  setBoxType() {
    const { x, y } = this.coordinates;
  }
}

export function createBox(isBomb, coordinates) {
  const newBox = new Box(isBomb, coordinates);

  newBox.setBoxType();

  return newBox
}