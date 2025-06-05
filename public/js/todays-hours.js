// hours-today.js (runtime client JS)
import { getHoursForToday } from './calendarData.js';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('[data-today-hours]');
  if (el) {
    el.innerHTML = getHoursForToday();
  }
});

window.printRGBGradient = function(message) {
  const letters = message.split('');
  let styledMessage = '';
  let styles = [];

  letters.forEach((letter, i) => {
    const r = Math.floor(128 + 128 * Math.sin(0.3 * i));
    const g = Math.floor(128 + 128 * Math.sin(0.3 * i + 2));
    const b = Math.floor(128 + 128 * Math.sin(0.3 * i + 4));
    styledMessage += `%c${letter}`;
    styles.push(`color: rgb(${r}, ${g}, ${b}); font-weight: bold; font-size: 28px; font-style: italic; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);`);
  });

  console.log(styledMessage, ...styles);
}

printRGBGradient(`Hello, I hope you're having a great day!`)