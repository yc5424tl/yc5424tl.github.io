

/*
window.onload = addSidebarListener();






function addSidebarListener() {
    console.info("Inside addSidebarListener()");
    var collapseButton = document.getElementById("sidebarButtonCollapse");
    collapseButton.addEventListener('click', toggleSidebar());
}

function toggleSidebar() {
    console.info("Inside toggleSidebar()");
    var sidebar = document.getElementById('sidebarNav');
    var sidebarWidth = sidebar.clientWidth;
    console.info("sidebarWidth = " + sidebarWidth);
    if(sidebarWidth > 0) {

        document.getElementById("sidebarNav").style.width = 0;
        document.getElementById("sidebarNav").style.left = '20vw';
        document.getElementById("sidebarNav").style.margin.left = "-20vw";
        console.info("after set width to 0 the width is reported as " + sidebar.clientWidth)
    }
    else if(sidebarWidth === 0) {

        document.getElementById("sidebarNav").style.width = '20vw';
        document.getElementById("sidebarNav").style.left = 0;
        document.getElementById("sideBarNav").style.margin.left = 0;
        console.info("after trying to make width 20vw it returns as " + sidebar.clientWidth);
    }
}*/

$(document).ready(function() {
    $('[data-toggle=offcanvas]').click(function() {
        $('.row-offcanvas').toggleClass('active');
    });
});


var lowerFrame = document.getElementById("lowerFrame");
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
}

/*$(document).ready(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= '50vh') { // use any value lower than the navbar height, [20] is an example

            $('.col-xs-6.col-sm-3.col-md-3.col-lg-2.sidebar-offcanvas').css({ // reducing the vertical padding from 25px to 10px
                'position':'fixed-top',
                'margin-top':'-50vh'
            });

        } else {

            $('#sidebar').css({ // reset the vertical padding to its initial value [25px]
                'position': 'fixed'

            });
        }
    });
});*/

/* END BORROWED*/