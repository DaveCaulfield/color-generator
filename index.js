
let selectedColorEl = document.getElementById('seed-color')
// let selectedModeEl = document.getElementById('color-mode')
// let selectedMode = selectedModeEl.value

let div1 = document.getElementById('color-div-1')
let div2 = document.getElementById('color-div-2')
let div3 = document.getElementById('color-div-3')
let div4 = document.getElementById('color-div-4')
let div5 = document.getElementById('color-div-5')

// Get the select element by its id
const select = document.getElementById("color-mode");
let index = select.selectedIndex;
let value = select.options[index].value
let text = select.options[index].text;


function getColorMode() {
    index = select.selectedIndex;
    colorModeValue = select.options[index].value
}

//change the div background colors
function displayReturnedColors(returnedColorsArray) {
    div2.style.backgroundColor = returnedColorsArray[0]
    div3.style.backgroundColor = returnedColorsArray[1]
    div4.style.backgroundColor = returnedColorsArray[2]
    div5.style.backgroundColor = returnedColorsArray[3]
    div1.style.backgroundColor = selectedColorEl.value
}

//change the div Hex labels
function displayHexLabels(returnedColorsArray) {
    document.getElementById('hex-value-1').innerText = selectedColorEl.value
    document.getElementById('hex-value-2').innerText = returnedColorsArray[0]
    document.getElementById('hex-value-3').innerText = returnedColorsArray[1]
    document.getElementById('hex-value-4').innerText = returnedColorsArray[2]
    document.getElementById('hex-value-5').innerText = returnedColorsArray[3]
}


// You can create a URL object with the base URL
let url = new URL("https://www.thecolorapi.com/scheme");


document.getElementById('get-btn').addEventListener("click", function () {

    getColorMode()
    console.log(colorModeValue, index);

    // create params object with the query data
    let params = {
        hex: `${selectedColorEl.value}`,
        mode: `${colorModeValue}`,
        count: 4,
    }

    // then use the URLSearchParams object to append the URL parameters
    let searchParams = new URLSearchParams(params);
    url.search = searchParams

    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            let returnedColorsArray = []
            data.colors.map(color => returnedColorsArray.push(color.hex.value))
            console.log(returnedColorsArray)
            displayReturnedColors(returnedColorsArray)
            displayHexLabels(returnedColorsArray)

        })
})



