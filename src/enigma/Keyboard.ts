import { Component } from "./Component";
import { letterFromSignal, signalFromLetter } from "./utils";

export class Keyboard extends Component {
  constructor(alphabet: string) {
    super(alphabet, alphabet);
  }

  forward(letter: string) {
    return signalFromLetter(this._left, letter);
  }

  backward(signal: number) {
    return letterFromSignal(this._left, signal);
  }
}
