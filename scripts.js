// scripts.js
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Dark mode styles
const darkModeStyles = `
  body.dark-mode {
    background-color: #333;
    color: white;
  }
  body.dark-mode header {
    background-color: #222;
  }
  body.dark-mode nav {
    background-color: #222;
  }
  body.dark-mode footer {
    background-color: #222;
  }
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = darkModeStyles;
document.head.appendChild(styleElement);
