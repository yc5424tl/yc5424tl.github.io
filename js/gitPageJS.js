



$(document).ready(function() {
    $('[data-toggle=offcanvas]').click(function() {
        $('.row-offcanvas').toggleClass('active');
    });
});


function getCurrentYear(){
    var maxField = document.getElementById('yearID');
    var year = new Date().getFullYear();
    maxField.setAttribute('max', year.toString());
}





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

