

function getCurrentYear(){
    var maxField = document.getElementById('yearID');
    var year = new Date().getFullYear();
    maxField.setAttribute('max', year.toString());
}
Window.onload(getCurrentYear());