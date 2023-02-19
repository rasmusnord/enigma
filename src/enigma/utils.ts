export const repeat = <T>(
  n: number,
  callbackFn: (currentValue: T, currentIndex: number) => T,
  initialValue: T
) => {
  let value = initialValue;

  for (let i = 0; i < n; i++) {
    value = callbackFn(value, i);
  }

  return value;
};

export const rotateForward = (s: string) => {
  return s.slice(1) + s.slice(0, 1);
};

export const rotateBackward = (s: string) => {
  return s.slice(s.length - 1) + s.slice(0, s.length - 1);
};

export const sortString = (s: string) => {
  return s.split("").sort().join("");
};

export const hasSameLetters = (a: string, b: string) => {
  return sortString(a) === sortString(b);
};

export const signalFromLetter = (wiring: string, letter: string) => {
  return wiring.indexOf(letter);
};

export const letterFromSignal = (wiring: string, signal: number) => {
  return wiring[signal];
};

export const swap = (wiring: string, a: string, b: string) => {
  const posA = wiring.indexOf(a);
  const posB = wiring.indexOf(b);
  const wiringArray = wiring.split("");

  wiringArray[posA] = b;
  wiringArray[posB] = a;

  return wiringArray.join("");
};

export const forward = (left: string, right: string, signal: number) => {
  const letter = letterFromSignal(right, signal);
  const nextSignal = signalFromLetter(left, letter);

  return nextSignal;
};

export const backward = (left: string, right: string, signal: number) => {
  return forward(right, left, signal);
};

export const mod = (x: number, y: number) => {
  return ((x % y) + y) % y || 0;
};
