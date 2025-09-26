let container = document.querySelector('#container');
let button = document.querySelector('.number-button');
let defaultGrid = createBoxes(16); 
let inputBox = document.querySelector('#input-grid');
let submit = document.querySelector('.button-submit');
let color = document.querySelector('#color-picker');
let reset =document.querySelector('.reset');


button.addEventListener('click', ()=>{
container.innerHTML ='';

let newGrid = createBoxes(prompt('Enter your desire side boxes numbers:')); 
})

reset.addEventListener('click', () => {
  
  
  container.innerHTML = '';
  createBoxes(16); 
})

submit.addEventListener('click', ()=>{
  container.innerHTML ='';
  createBoxes(inputBox.value);
});



function createBoxes (number) {

 for (let i = 1; i <= number*number; i++) {
    if (number > 100)  { 
  alert('the maximum is only 100!');
  container.innerHTML ='';
  createBoxes(16); 
  break;}
    
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.flex = `0 0 calc(100% / ${number})`;
    container.appendChild(box);
    box.addEventListener('mouseover', ()=>{ 
     let randomColor = Math.round(Math.random() * 10);
      if (randomColor <= 3.3) {
      randomColor =  `red`;
      }else if(randomColor > 3.3 && randomColor <= 6.6) {
      randomColor = `green`;
      }else {
      randomColor= `blue`;
      }
      box.style.backgroundColor = color.value;
    }) 
  }
  
return number;
}




