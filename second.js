const prevbtn=document.querySelector('.prev-btn');
const buttons=document.querySelectorAll('button')
const indicator=document.querySelector('.indicator');
const items=document.querySelectorAll('.item')
const progrssbar=document.querySelector('.process')
//update current step based on the btn click//


let curruntStep=1;
const updateStep=(e)=>{
  
curruntStep=e.target.id==='nxt'? ++curruntStep:--curruntStep;
console.log(curruntStep)
Activefun()
}

// add Eventlistener to all btn//
buttons.forEach(button=>{
  button.addEventListener('click',updateStep)

})




function Activefun(){

items.forEach((item, index)=> {
item.classList[`${index < curruntStep? 'add':'remove'}`]('active')
indicator.style.width = `${((curruntStep - 1) / (items.length - 1)) * 100}%`;
if(curruntStep==items.length){
  buttons[1].disabled=true;
}
 else if(curruntStep==1){
  buttons[0].disabled=true;;
}
else{
buttons.forEach(button=>{
  button.disabled=false;
})


}
})}






