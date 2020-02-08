
function weightConvert() {
    var weight = document.getElementById('weight').value;
    var scale = document.getElementById('scale').value;
    var result = document.getElementById('result');
    let calc;
    if (!isNaN(weight)) {
        if (scale === 'lb') {
            calc = (weight * 0.453592) + ' kilograms';
        }
        else {
            calc = (weight * 2.20462) + ' pounds';
        }
        result.innerHTML = calc;
    } else {
        result.innerHTML = 'invalid input';
    }
}

function calculate() {
    var input = document.getElementById('series').value;
    var arr1 = input.split(",");
    var arr2 = [];
    arr1.forEach(element => {
        if (element !== '' || element !== ' ') {
            arr2.push(element.trim());
        }

    });


    arr2.forEach(element => {
        if (isNaN(element)) {
            arr2.splice(arr2.indexOf(element), 1);
        }
    });

    const arrMax = Math.max(...arr2);
    const arrMin = Math.min(...arr2);
    let arrSum = 0;
    arr2.forEach(element => {
        if (element == '') {
            arrSum = arrSum;

        } else {
            arrSum = arrSum + parseFloat(element);
        }

    });
    const arrAvg = arrSum / arr2.length;

    document.getElementById('max').innerHTML = arrMax;
    document.getElementById('min').innerHTML = arrMin;
    document.getElementById('sum').innerHTML = arrSum;
    document.getElementById('avg').innerHTML = arrAvg;
    document.getElementById('rvs').innerHTML = arr1.reverse();
}

var quotes = [
    "Everything you can imagine is real.",
    "Simplicity is the ultimate sophistication.",
    "Whatever you do, do it well. – Walt Disney",
    "What we think, we become. – Buddha",
    "All limitations are self-imposed. – Oliver Wendell Holmes",
    "Tough times never last but tough people do. – Robert H. Schiuller"];

function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

document.getElementById('quote').innerHTML = quotes[randomInt(0, 5)];

function colorchange(color) {
    document.getElementById('quote').className = "p-3 " + color;
}

