var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var def = "<h2>" + "Tomas" + "</h2> " + "<p>" + "1984-05-26" + "</p>";
document.getElementById('result').innerHTML = def;

function showResult() {
    var name = input1.value;
    var date = input2.value;

    var d = new Date(date);
    day = d.getDate();
    month = d.getMonth() + 1;

    var rez = "<h2>" + name + "</h2> " + "<p>" + date + "</p>";
    var zod = "<p>" + "Zodiako ženklas: " + getZodiacSign(day, month) + "</p>";

    if (name === null && date === null || !name && !date) {
        document.getElementById('result').innerHTML = "Neįvestas vardas ir gimimo diena";
    } else if (name === null || !name) {
        document.getElementById('result').innerHTML = "Neįvestas vardas";
    } else if (date === null || !date) {
        document.getElementById('result').innerHTML = "Neįvesta gimimo diena";
    } else {
        document.getElementById('result').innerHTML = rez + zod;
    }
};

/**
 * Return zodiac sign by month and day
 *
 * @param day
 * @param month
 * @return {string} name of zodiac sign
 */
function getZodiacSign(day, month) {

    var zodiacSigns = {
        'capricorn': "Ožiaragis",
        'aquarius': "Vandenis",
        'pisces': "Žuvys",
        'aries': "Avinas",
        'taurus': "Jautis",
        'gemini': "Dvyniai",
        'cancer': "Vėžys",
        'leo': "Liūtas",
        'virgo': "Mergelė",
        'libra': "Svarstyklės",
        'scorpio': "Skorpionas",
        'sagittarius': "Šaulys"
    }

    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        return zodiacSigns.capricorn;
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return zodiacSigns.aquarius;
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return zodiacSigns.pisces;
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return zodiacSigns.aries;
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return zodiacSigns.taurus;
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return zodiacSigns.gemini;
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return zodiacSigns.cancer;
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return zodiacSigns.leo;
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return zodiacSigns.virgo;
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return zodiacSigns.libra;
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return zodiacSigns.scorpio;
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return zodiacSigns.sagittarius;
    }
}

function printPeopleFromLt() {
    let testData = PEOPLE;
    let lithuanians;

    lithuanians = testData.filter(people => people.salis == "Lithuania");
    let x = '';

    for (let i = 0; i < lithuanians.length; i++) {
        let ltPeople = lithuanians[i];
        x = x + `${ltPeople.vardas} ${ltPeople.pavarde} (${ltPeople.salis})`
    }
    x = x.slice(0, -2);
    let xx = `${x}.`;
    return document.getElementById('people').innerHTML = xx;
}