const hiddenButton = document.getElementById("hiddenButton");
const visibleButton = document.getElementById("visibleButton");
function bottles() {
    hiddenButton.classList.add("hidden");
    visibleButton.classList.remove("hidden"); 
    for(i=100;i>=0;i--) {
        console.log(i)
        if (i === 1) {
            document.getElementById("lyrics").innerHTML += 
                "1 bottle of beer on the wall, 1 bottle of beer.<br>" +
                "Take one down and pass it around, no more bottles of beer on the wall.<br><br>";
        } else if (i === 0) {
            document.getElementById("lyrics").innerHTML += 
                "No more bottles of beer on the wall, no more bottles of beer.<br>" +
                "Go to the store and buy some more, 99 bottles of beer on the wall.<br><br>";
        } else {
            document.getElementById("lyrics").innerHTML += 
                `${i} bottles of beer on the wall, ${i} bottles of beer.<br>` +
                `Take one down and pass it around, ${i - 1} bottles of beer on the wall.<br><br>`;
        }
    }
}
;
function again() {
    document.getElementById("lyrics").innerHTML = "";
    hiddenButton.classList.remove("hidden");
    visibleButton.classList.add("hidden");
}
