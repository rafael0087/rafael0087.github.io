const display = document.getElementById('display');
const clickSound = document.getElementById('clickSound');

function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function append(value) {
  playSound();
  if (display.textContent === '0') display.textContent = '';
  display.textContent += value;
}

function clearDisplay() {
  playSound();
  display.textContent = '0';
}

function deleteLast() {
  playSound();
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    clearDisplay();
  }
}

function Calculate() {
  playSound();
  try {
    display.textContent = eval(display.textContent);
  } catch {
    display.textContent = "Erreur";
  }
}
