function Convert() {
    let r_string = document.getElementById("Range").value;
    let r = parseFloat(r_string);

    let fromUnit = document.getElementById("fromUnit").value;

    let baseRange = 0; // m
    if (fromUnit == "mm") {
        baseRange = r / 1000;
    } else if (fromUnit == "cm") {
        baseRange = r / 100;
    } else if (fromUnit == "km") {
        baseRange = r * 1000;
    } else {
        baseRange = r;
    }

    let res = 0;
    let toUnit = document.getElementById("toUnit").value;
    if (toUnit == "mm") {
        res = baseRange * 1000;
    } else if (toUnit == "cm") {
        res = baseRange * 100;
    } else if (toUnit == "km") {
        res = baseRange / 1000;
    } else {
        res = baseRange;
    }

    document.getElementById("result").innerText = res;
}