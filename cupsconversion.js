document.getElementById('convertOz').addEventListener('click', ouncesConvert)

function ouncesConvert() {
    let ounces = document.getElementById("ozValue").value

    ounces /= 8

    document.getElementById("cupsValue").innerText = ounces.toFixed(1) + " cup(s)"
}