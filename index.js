let container = document.querySelector('#container');
let button = document.querySelector('.number-button');


/* for (let i = 1; i <= 256; i++) {
    
    const box = document.createElement('div');
    box.classList.add('box');
    box.textContent = i;
    container.appendChild(box);
    box.addEventListener('mousemove', ()=>{
    box.style.backgroundColor = 'yellow';
    })
  } */
/* button.addEventListener('click', ()=>{
  let numberOfBoxes = prompt('Enter the box number per-side:');
  for (let i = 1; i <= numberOfBoxes; i++) {
  let newGrid = document.createElement('div');
  newGrid.classList.add('new-grid');
  container.innerHTML='';
  }
});  */

function createBoxes (number) {

 for (let i = 1; i <= number*number; i++) {
    
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.flex = `0 0 calc(100% / ${number})`;
    container.appendChild(box);
    box.addEventListener('mouseenter', ()=>{
     let randomColor = Math.round(Math.random() * 10);
      if (randomColor <= 3.3) {
      randomColor =  `rgba(255, 0, 0, ${incrementColor(0.027)})`;
      }else if(randomColor > 3.3 && randomColor <= 6.6) {
      randomColor = `rgba(0, 128, 0, ${incrementColor(0.027)})`;
      }else {
      randomColor= `rgba(0, 0, 255, ${incrementColor(0.082)})`;

      }
      box.style.backgroundColor = randomColor;
      
      
    })
  } return number;
}

let defaultGrid = createBoxes(16); 

button.addEventListener('click', ()=>{
container.innerHTML ='';
let newGrid = createBoxes(prompt('Enter your desire side boxes numbers:')); 

if (newGrid > 100) {
  alert('the maximum is only 100!')
  container.innerHTML ='';
  createBoxes(16);
}

})

function incrementColor (number) {
  if (number < 1) { number += 0.1}
  return number;
}
