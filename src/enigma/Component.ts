export class Component {
  protected _left;
  protected _right;

  constructor(left: string, right: string) {
    this._left = left;
    this._right = right;
  }

  get left() {
    return this._left;
  }

  get right() {
    return this._right;
  }
}
