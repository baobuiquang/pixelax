// document.getElementById("hover-id").addEventListener("mouseover", mouseOver);
// document.getElementById("hover-id").addEventListener("mouseout", mouseOut);

// function mouseOver() {
//     $('.hover-class').append(`<div id="append-id" style="top: 0px; left: 0px; height: 20px; width: 20px; position:relative; background-color: #ffffff7c;"></div>`);
// }

// function mouseOut() {
//     $("#append-id").remove();
// }

function drawHoverTable(sw, sh, pw) {
    var numOfCols = sw / pw;
    var numOfRows = sh / pw;

    for (var i = 0; i < 10000; i++) {
        if (document.getElementsByClassName("hover-cell")[0]) {
            document.getElementsByClassName("hover-cell")[0].remove();
        } else {
            break;
        }
    }

    for (var j = 0; j < numOfRows; j++) {
        for (var i = 0; i < numOfCols; i++) {
            $("#hover-table").append(`
            <div class="hover-cell" 
            style="
                height: calc(${pw}px + 0.8px); 
                width: calc(${pw}px + 0.8px); 
                top: calc(${j * pw}px - 0.4px); 
                left: calc(${i * pw}px - 0.4px);" 
            onmousedown="playSound()">
            </div>
            `);
        }
    }


}

function playSound() {
    var audio = new Audio('./sfx/pop.flac');
    audio.play();
}
