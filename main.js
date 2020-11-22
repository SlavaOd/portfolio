var arrow = document.querySelector('.arrow_down')
var menu = document.querySelector('.menu')
var menu_block = document.querySelector('.menu_block')


var timerId = setInterval(function () {
    arrow.style.top = '250px'
    arrow.style.transition = '1.00s'
}, 1000);  

var timerId2 = setInterval(function () {
    arrow.style.top = '160px'
    arrow.style.transition = '1.00s'
}, 2000);  

menu.onclick = function() {
    if (menu_block.style.display == 'none') {
        menu_block.style.display = 'block'
    }
    else {
        menu_block.style.display = 'none'
    }
}

menu_block.onclick = function() {
    menu_block.style.display = 'none'
}

