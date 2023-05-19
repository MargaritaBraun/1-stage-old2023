class Box {
  constructor() {
    this.isBomb = isBomb;
    this.coordinates = coordinates;
  }

}

export function createBox(isBomb, coordinates) {
  const newBox = new Box(isBomb, coordinates)

  return newBox
}