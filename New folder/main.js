'use script';

  
VANTA.GLOBE({
  el: "#intro",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
})


let text=document.querySelector('.text')
let block1 = document.querySelector('.block1');
let block3 = document.querySelector('.block3');
let bl1 = document.querySelector('.bl');
let bl2 = document.querySelector('.bl2');
let bl3 = document.querySelector('.bl3');

setInterval(() => {
    let data=new Date()
    let secondes=data.getSeconds()
    let minutes=data.getMinutes()
    let hours=data.getHours()
    let date=data.getDate()
    text.textContent= addzero(hours)+":"+addzero(minutes)+":"+addzero(secondes)
    if (secondes ==1) {
      VANTA.GLOBE({
        el: "#intro",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
    })
    }
    if (secondes == 20) {
      VANTA.RINGS({
        el: "#intro",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xff1414
      })
    }
    if (secondes == 40) {
      VANTA.BIRDS({
        el: "#intro",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
    })
    }

  if (minutes == 00) {
    text.minutes=classList.add('bl')
   }
  if (minutes == 20) { 
    text.minutes=classList.remove('bl')
    text.minutes=classList.add('bl2')
  }
  if (minutes == 40) { 
    text.minutes=classList.remove('bl2')
    text.minutes=classList.add('bl3')
  }

}, 1000)
    function addzero(num) {
    if (num >= 0 && num <= 9) {
    return '0'+num
    }
    return num
}