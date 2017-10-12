document.addEventListener('DOMContentLoaded', function() {

    //TOGGLE MENU NAV
    var menubutton = document.querySelectorAll('.menu-button');
    var i;
    for (i = 0; i < menubutton.length; i++) {
        menubutton[i].onclick = function(){
            this.classList.toggle("expanded");
        }
    } 
    
    //TOGGLE ACCORDIAN
    var acc = document.querySelectorAll('.accordian');
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].getElementsByTagName('h4')[0].onclick = function(){
            this.parentElement.classList.toggle("open");
        }
    }
    
})
