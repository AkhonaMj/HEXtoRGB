let inputHex = document.querySelector("#hex-color");
let displayRGB = document.querySelector("span");
let button = document.querySelector("button");

button.addEventListener("click", hex2rgb);

function hex2rgb() {
    let hexValue = inputHex.value.trim();

    
    hexValue = hexValue.replace("#", "");
    let r = parseInt(hexValue.substring(0, 2), 16);
    let g = parseInt(hexValue.substring(2, 4), 16);
    let b = parseInt(hexValue.substring(4, 6), 16);
    
    displayRGB.innerHTML = `rgb(${r}, ${g}, ${b})`;
}
