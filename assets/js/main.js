const setActive = (el, active)=> {
 active.classList.remove('active')
 el.classList.add('active')
}

let switches = document.querySelectorAll('.switch_item');
switches.forEach(el => {
 el.addEventListener('click', (e)=> {
  let active = document.querySelector('.switch_item.active')
  setActive(el,active)
  let key = el.getAttribute('data-key')
  let active_square = el.parentNode.children[0]
  if(key == 1){
   active_square.classList.remove('right')
  }else{
   active_square.classList.add('right')
  }
 })
})
let directionRadios = document.querySelectorAll('.choose-direction .radio-container');
directionRadios.forEach(el => {
 el.addEventListener('click', (e)=> {
  let active = document.querySelector('.choose-direction .radio-container.active')
  setActive(el,active)
 })
})