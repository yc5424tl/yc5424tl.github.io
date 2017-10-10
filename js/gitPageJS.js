


/*

$(document).ready(function() {
    $('[data-toggle=offcanvas]').click(function() {
        $('.row-offcanvas').toggleClass('active');
    });
});
*/


function getCurrentYear(){
    var maxField = document.getElementById('yearID');
    var year = new Date().getFullYear();
    maxField.setAttribute('max', year.toString());
}






/*
function getButtonListeners() {

    console.info("in getButtonListeners");
    var buttons = document.getElementsByClassName("navbar-btn nav-item");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", toggleDivs())
    }
}


function toggleDivs() {
    console.info("In toggle divs");
    var buttons = document.getElementsByClassName('.div-toggle');
    for(var i = 0; i < buttons.length; i++) {
        console.info("in loop, button at i = " + button[i]);
        buttons[i].setAttribute(collapse, 'hide');
    }
    var buttonClicked = event.target || event.srcElement;
    buttonClicked.setAttribute(collapse, 'show');
}






Window.addEventListener('load', getButtonListeners());
Window.addEventListener('load', toggleDivs());
*/





/*var lowerFrame = document.getElementById("lowerFrame");
var upperFrame = document.getElementById("upperFrame");

window.onload(iframeResize(lowerFrame));
window.onload(iframeResize(upperFrame));

function iframeResize(id) {
    var resizeHeight;
    var resizeWidth;
    if(document.getElementById) {
        resizeHeight=document.getElementById(id).contentWindow.document.body.scrollHeight;
        resizeWidth=document.getElementById(id).contentWindow.document.body.scrollWidth;
    }
    document.getElementById(id).height=resizeHeight + "px";
    document.getElementById(id).width=resizeWidth + "px";
}*/

