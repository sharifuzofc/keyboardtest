const keyboardLayout = [
  [
    "Escape",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
  ],
  [
    "Backquote",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
    "Minus",
    "Equal",
    "Backspace",
  ],
  [
    "Tab",
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyR",
    "KeyT",
    "KeyY",
    "KeyU",
    "KeyI",
    "KeyO",
    "KeyP",
    "BracketLeft",
    "BracketRight",
    "Backslash",
  ],
  [
    "CapsLock",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "Semicolon",
    "Quote",
    "Enter",
  ],
  [
    "ShiftLeft",
    "KeyZ",
    "KeyX",
    "KeyC",
    "KeyV",
    "KeyB",
    "KeyN",
    "KeyM",
    "Comma",
    "Period",
    "Slash",
    "ShiftRight",
  ],
  ["ControlLeft", "AltLeft", "Space", "AltRight", "ControlRight"],
];

const keyNames = {
  Escape: "Esc",
  Backquote: "~",
  Digit1: "1",
  Digit2: "2",
  Digit3: "3",
  Digit4: "4",
  Digit5: "5",
  Digit6: "6",
  Digit7: "7",
  Digit8: "8",
  Digit9: "9",
  Digit0: "0",
  Minus: "-",
  Equal: "=",
  KeyQ: "Q",
  KeyW: "W",
  KeyE: "E",
  KeyR: "R",
  KeyT: "T",
  KeyY: "Y",
  KeyU: "U",
  KeyI: "I",
  KeyO: "O",
  KeyP: "P",
  BracketLeft: "[",
  BracketRight: "]",
  Backslash: "\\",
  KeyA: "A",
  KeyS: "S",
  KeyD: "D",
  KeyF: "F",
  KeyG: "G",
  KeyH: "H",
  KeyJ: "J",
  KeyK: "K",
  KeyL: "L",
  Semicolon: ";",
  Quote: "'",
  KeyZ: "Z",
  KeyX: "X",
  KeyC: "C",
  KeyV: "V",
  KeyB: "B",
  KeyN: "N",
  KeyM: "M",
  Comma: ",",
  Period: ".",
  Slash: "/",
  Space: "Space",
  Enter: "Enter",
  Tab: "Tab",
  Backspace: "Backspace",
  CapsLock: "CapsLock",
  ShiftLeft: "Shift",
  ShiftRight: "Shift",
  ControlLeft: "Ctrl",
  ControlRight: "Ctrl",
  AltLeft: "Alt",
  AltRight: "Alt",
};

const keyContainer = document.getElementById("keyboard");

keyboardLayout.forEach((row) => {
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row");

  row.forEach((code) => {
    const keyDiv = document.createElement("div");
    keyDiv.classList.add("key");
    keyDiv.textContent = keyNames[code] || code;
    keyDiv.dataset.code = code;
    rowDiv.appendChild(keyDiv);
  });

  keyContainer.appendChild(rowDiv);
});

window.addEventListener("keydown", (e) => {
  const key = document.querySelector(`[data-code='${e.code}']`);
  if (key) key.classList.add("pressed");
});

window.addEventListener("keyup", (e) => {
  const key = document.querySelector(`[data-code='${e.code}']`);
  if (key) key.classList.remove("pressed");
});

// Mouse buttons
document.getElementById("leftClick").addEventListener("mousedown", () => {
  document.getElementById("leftClick").classList.add("pressed");
});
document.getElementById("leftClick").addEventListener("mouseup", () => {
  document.getElementById("leftClick").classList.remove("pressed");
});

document.getElementById("rightClick").addEventListener("contextmenu", (e) => {
  e.preventDefault();
  const btn = document.getElementById("rightClick");
  btn.classList.add("pressed");
  setTimeout(() => btn.classList.remove("pressed"), 300);
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
