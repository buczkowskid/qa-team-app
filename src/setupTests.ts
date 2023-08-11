// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

declare global {
  interface Window {
    Worker: any;
  }
}

Object.defineProperty(URL, "createObjectURL", {
  writable: true,
  value: jest.fn(),
});

class Worker {
  public url: string;

  public onmessage: (msg: string) => any;

  constructor(stringUrl: string) {
    this.url = stringUrl;
    this.onmessage = () => null;
  }

  postMessage(msg: string) {
    this.onmessage(msg);
  }
}

Element.prototype.scrollTo = () => jest.fn();
window.scrollTo = jest.fn();

window.Worker = Worker;

Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
  writable: true,
  value: jest.fn(),
});

Object.defineProperty(window, "localStorage", { value: jest.fn() });

["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].forEach(
  (method) => Object.defineProperty(localStorage, method, { value: jest.fn() })
);
