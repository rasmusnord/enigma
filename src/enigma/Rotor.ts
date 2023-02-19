import { Component } from "./Component";
import {
  forward,
  backward,
  rotateForward,
  rotateBackward,
  repeat,
  mod,
} from "./utils";

export class Rotor extends Component {
  private _ring;
  private _notch;

  constructor(alphabet: string, wiring: string, notch: string) {
    super(alphabet, wiring);

    this._ring = alphabet;
    this._notch = notch;
  }

  isAtNotch() {
    return this.left[0] === this._notch;
  }

  setRingPosition(position: number) {
    const realPos = position - 1;

    this.rotate(realPos, false);

    const posNotch = this._ring.indexOf(this._notch);
    const nextPosNotch = mod(posNotch - realPos, this._ring.length);

    this._notch = this._ring[nextPosNotch];
  }

  forward(signal: number) {
    return forward(this._left, this._right, signal);
  }

  backward(signal: number) {
    return backward(this._left, this._right, signal);
  }

  rotate(n = 1, forward = true) {
    const rotateFn = forward ? rotateForward : rotateBackward;

    this._left = repeat(n, rotateFn, this._left);
    this._right = repeat(n, rotateFn, this._right);
  }

  rotateToLetter(letter: string) {
    const n = this._ring.indexOf(letter);

    this.rotate(n);
  }

  get notch() {
    return this._notch;
  }
}
