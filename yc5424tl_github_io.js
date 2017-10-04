function getParaListeners() {
    console.info("Adding Listeners");
    var paraArray = document.getElementsByTagName('openParaButton');
    for (var i = 0; i < paraArray.length; i++) {
        var paraTarget = paraArray[i];
        console.log("ParaTarget = " + paraTarget.toString());
        paraTarget.addEventListener("click", tabParagraph());


       /* document.querySelectorAll('openParaButton').forEach(function (elem) {
            elem.addEventListener("click", tabParagraph());
            console.info("added listener")
        })
*/

    }
}




function tabParagraph() {
    console.info("At Beginning of tabParagraph() Function;");

    var targetButton = document.getElementsByName(event.srcElement).toString();
    var buttonWidth = targetButton.style.width;
    console.info("buttonWidth = " + buttonWidth);
    if (buttonWidth === '1vw') {
        targetButton.style.width = '16vw';
        targetButton.style.height = 'auto';
        targetButton.style.border.color = '#001427';
    }

    else if (buttonWidth === '16vw') {
        targetButton.style.width = '1vw';
        targetButton.style.height = '1vw';
        targetButton.style.border.color = '#E89B00'
    }

    else (console.info("Failed to find target button width at expected values."))
}