import { Component } from "./Component";
import { forward, hasSameLetters } from "./utils";

export class Reflector extends Component {
  constructor(alphabet: string, wiring: string) {
    super(alphabet, wiring);

    if (!hasSameLetters(this._left, this._right)) {
      throw new Error("Incomplete wiring");
    }
  }

  reflect(signal: number) {
    return forward(this._left, this._right, signal);
  }
}
