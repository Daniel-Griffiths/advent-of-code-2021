import { values } from "./values";
import { Direction } from "./enums/direction";
import { Position } from "./interfaces/Position";

class Submarine {
  private position: Position = { depth: 0, position: 0, aim: 0 };

  public getCalculatedPosition(): number {
    return this.position.position * this.position.depth;
  }

  public move(direction: Direction, units: number): void {
    switch (direction) {
      case Direction.forward:
        this.position.position += units;
        break;
      case Direction.up:
        this.position.depth -= units;
        break;
      case Direction.down:
        this.position.depth += units;
        break;
    }
  }

  public moveWithAim(direction: Direction, units: number): void {
    switch (direction) {
      case Direction.forward:
        this.position.position += units;
        this.position.depth += this.position.aim * units;
        break;
      case Direction.up:
        this.position.aim -= units;
        break;
      case Direction.down:
        this.position.aim += units;
        break;
    }
  }
}

const submarineOne = new Submarine();
const submarineTwo = new Submarine();

values.forEach(({ direction, units }) => {
  submarineOne.move(direction, units);
  submarineTwo.moveWithAim(direction, units);
});

console.log({
  partOneAnswer: submarineOne.getCalculatedPosition(),
  partTwoAnswer: submarineTwo.getCalculatedPosition(),
});
