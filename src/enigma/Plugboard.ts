import { Component } from "./Component";
import { backward, forward, swap } from "./utils";

export class Plugboard extends Component {
  constructor(alphabet: string, pairs: string[]) {
    super(alphabet, alphabet);

    for (const [a, b] of pairs) {
      this._left = swap(this.left, a, b);
    }
  }

  forward(signal: number) {
    return forward(this._left, this._right, signal);
  }

  backward(signal: number) {
    return backward(this._left, this._right, signal);
  }
}
