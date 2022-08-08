document.getElementById('convertTspFlip').addEventListener('click', convertTsp)
function convertTsp() {
    let tsp = document.getElementById('tspValueFlip').value

    tsp = tsp / 3

    document.getElementById('tbspValueFlip').innerText = tsp + " tablespoon(s)"
}