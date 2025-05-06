const keyboardLayout = [
    ["Esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"],
    ["~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
    ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
    ["Ctrl", "Alt", "Space", "Alt", "Ctrl"]
  ];
  
  const keyContainer = document.getElementById("keyboard");
  
  // Generate keyboard UI
  keyboardLayout.forEach(row => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
  
    row.forEach(key => {
      const keyDiv = document.createElement("div");
      keyDiv.classList.add("key");
      keyDiv.textContent = key;
      keyDiv.dataset.key = key.toLowerCase();
      rowDiv.appendChild(keyDiv);
    });
  
    keyContainer.appendChild(rowDiv);
  });
  
  // Keyboard keydown event
  document.addEventListener("keydown", (e) => {
    const pressed = e.key.toLowerCase();
    document.querySelectorAll(".key").forEach(key => {
      if (
        key.dataset.key === pressed ||
        (pressed === " " && key.dataset.key === "space") ||
        (pressed === "control" && key.dataset.key === "ctrl") ||
        (pressed === "altgraph" && key.dataset.key === "alt") ||
        (pressed === "arrowleft" && key.dataset.key === "left") ||
        (pressed === "arrowright" && key.dataset.key === "right")
      ) {
        key.classList.add("pressed");
      }
    });
  });
  
  // Keyboard keyup event
  document.addEventListener("keyup", (e) => {
    const released = e.key.toLowerCase();
    document.querySelectorAll(".key").forEach(key => {
      if (
        key.dataset.key === released ||
        (released === " " && key.dataset.key === "space") ||
        (released === "control" && key.dataset.key === "ctrl") ||
        (released === "altgraph" && key.dataset.key === "alt") ||
        (released === "arrowleft" && key.dataset.key === "left") ||
        (released === "arrowright" && key.dataset.key === "right")
      ) {
        key.classList.remove("pressed");
      }
    });
  });
  
  // Mouse left button
  document.getElementById("leftClick").addEventListener("mousedown", () => {
    document.getElementById("leftClick").classList.add("pressed");
  });
  document.getElementById("leftClick").addEventListener("mouseup", () => {
    document.getElementById("leftClick").classList.remove("pressed");
  });
  
  // Mouse right button
  document.getElementById("rightClick").addEventListener("contextmenu", (e) => {
    e.preventDefault();
    document.getElementById("rightClick").classList.add("pressed");
    setTimeout(() => {
      document.getElementById("rightClick").classList.remove("pressed");
    }, 300);
  });
  
  // Dark mode toggle
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  