// Value of cups -> Value of ounces

// Steps: (convert button)
// 1. Enter value of cups within the input field
// 2. Click "convert"
// 3. Value of cups is now converted to ounces

// Steps: (flip button)
// 1. Press button to bring user to a new page


document.getElementById("convertCup").addEventListener("click", cupsConvert)

function cupsConvert() {
    let cups = document.getElementById("cupsValue").value

    cups *= 8 // cups = cups * 8
    
    document.getElementById("ozValue").innerText = cups + " ounces"
}