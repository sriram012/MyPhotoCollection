// listening functions.............
$(document).ready(function () {

    $('#topNavBtn').click(function () { toggleNav(); });

    $(document).scroll(function () {
        var pageOverlay = document.getElementById('pageOverlay').style.opacity;
        var scrolTop = $(this).scrollTop();

        if (pageOverlay == 0) {
            if (scrolTop > 20) {
                changeTopNavBtn();
                changeNavBack();
            }
            else if (scrolTop <= 20) {
                revertTopNavBtn();
                revertNavBack();
            }
        }
    });

});


// ------------------------------------------------------------------------------------------
// Functions---------------------------------------------------------------------------------
function toggleNav() {
    var navHeight = document.getElementById('topNavCont').style.height;
    if (navHeight == 0 || navHeight == '0px') {
        openNav();
    }
    else {
        closeNav();
    }
}


// Opening Nav Bar...
function openNav() {
    document.getElementById('topNavCont').style.height = "100%";
    document.getElementById('topNavUpperCont').style.boxShadow = '-1px 10px 20px 15px rgba(00, 00, 00, 0.5)';
    funcsForOpenNav();
}

function closeNav() {
    document.getElementById('topNavCont').style.height = "0";
    document.getElementById('topNavUpperCont').style.boxShadow = '0 0 0 0';
    funcsForCloseNav();
}


function funcsForOpenNav() {
    var topNavBtn = document.getElementById('topNavBtn');
    topNavBtn.style.width = "50px";
    topNavBtn.style.height = "50px";
    topNavBtn.style.borderRadius = '50%';
    topNavBtn.style.backgroundImage = 'radial-gradient(#9cecfb, #0052D4)';
    topNavBtn.firstChild.innerHTML = "&times;";
    topNavBtn.firstChild.style.fontSize = '40px';
    document.getElementById('pageOverlay').style.opacity = '0.7';
}

function funcsForCloseNav() {
    var scrollTop = $(document).scrollTop();
    var topNavBtn = document.getElementById('topNavBtn');
    if (scrollTop <= 20) {
        topNavBtn.style.backgroundImage = 'linear-gradient(to right bottom, #0052D4, #9cecfb, #0052D4)';
        topNavBtn.style.width = "27%";
        topNavBtn.style.height = "12px";
        topNavBtn.style.borderRadius = '6px';
        topNavBtn.firstChild.style.fontSize = '10px';
        topNavBtn.style.marginRight = 'auto';
    }
    else {
        topNavBtn.firstChild.style.fontSize = '30px';
        topNavBtn.style.background = 'transparent';
        topNavBtn.style.marginRight = '20px';
    }
    topNavBtn.firstChild.innerHTML = "&#9776;";
    document.getElementById('pageOverlay').style.opacity = '0';
}


// Changing top Navbar button on scroll...
function changeTopNavBtn() {
    var topNavBtn = document.getElementById('topNavBtn');
    // topNavBtn.style.backgroundImage = 'radial-gradient(#9cecfb, #0052D4)';
    topNavBtn.style.background = 'transparent';
    topNavBtn.style.width = '50px';
    topNavBtn.style.height = "50px";
    topNavBtn.style.borderRadius = '50%';
    topNavBtn.style.marginRight = '20px';
    topNavBtn.firstChild.style.fontSize = '30px';
}

function revertTopNavBtn() {
    var topNavBtn = document.getElementById('topNavBtn');
    topNavBtn.style.backgroundImage = 'linear-gradient(to right bottom, #0052D4, #9cecfb, #0052D4)';
    topNavBtn.style.width = '27%';
    topNavBtn.style.height = "12px";
    topNavBtn.style.borderRadius = '6px';
    topNavBtn.style.marginRight = 'auto';
    topNavBtn.firstChild.style.fontSize = '10px';
}

function changeNavBack() {
    document.getElementById('navBar').style.background = 'rgb(176, 223, 229)';
}

function revertNavBack() {
    document.getElementById('navBar').style.background = 'linear-gradient(to top, rgba(176, 223, 229, 0.7), rgba(0, 0, 0, 0))';
}
