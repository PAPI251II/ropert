const buttonheight = 50
const buttonWidth = 150

const maxWidth = window.innerWidth -
buttonWidth;

const maxHeight = window.innerHeight - buttonheight;

window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('button');
  
  button.addEventListener('click', () => {
    button.style.left =Math.floor(Math.random() * (maxWidth + 1)) + 'px';
   button.style.top =Math.floor(Math.random() * (maxWidth + 1)) + 'px';
    
  });
});
