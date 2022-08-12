document.getElementById('convertTbsp').addEventListener('click', convertTbsp)

function convertTbsp() {
    let tbsp = document.getElementById('tbspValue').value

    tbsp = tbsp * 3

    document.getElementById('tspValue').innerText = tbsp + " teaspoon(s)"
}

