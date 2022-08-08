document.getElementById('convertTbsp').addEventListener('click', convertTbsp)
document.getElementById('convertTspFlip').addEventListener('click', convertTsp)

function convertTbsp() {
    let tbsp = document.getElementById('tbspValue').value

    tbsp = tbsp * 3

    document.getElementById('tspValue').innerText = tbsp + " teaspoon(s)"
}

function convertTsp() {
    let tsp = document.getElementById('tspValueFlip').value

    tsp = tsp / 3

    document.getElementById('tbspValueFlip').innerText = tsp + " tablespoon(s)"
}