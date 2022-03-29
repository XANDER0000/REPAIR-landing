// let test = document.getElementById("point");

// test.addEventListener("mouseover", function( event ) {
//   event.target.style.color = "orange";
// })

// test.addEventListener("mouseout", function( event ) {
//  event.target.style.color = "";
// })

active1.onmouseenter = active1.onmouseleave = handler;
active2.onmouseenter = active2.onmouseleave = handler;
active3.onmouseenter = active3.onmouseleave = handler;
active4.onmouseenter = active4.onmouseleave = handler;
let doActive = document.getElementById('doActive')

function handler(event) {

  function str(el) {
    if (!el) return "null"
    return el.id;
  }

  if (event.type == 'mouseenter') {
    event.target.classList.add('active')
    doActive.classList.add('active' , 'active--' + str(event.target))
  } else if (event.type == 'mouseleave') {
    event.target.classList.remove('active')
    doActive.classList.remove('active' , 'active--' + str(event.target))
  }
}