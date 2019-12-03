// // замените позицию 1 значением 12 и замените позицию 2 значением 2. 
// // Какое значение остается в позиции 0 после остановки программы?

var arr = [1, 12, 2, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 10, 19, 1, 6,
    19, 23, 1, 10, 23, 27, 2, 27, 13, 31, 1, 31, 6, 35, 2, 6, 35, 39, 1, 39, 5,
    43, 1, 6, 43, 47, 2, 6, 47, 51, 1, 51, 5, 55, 2, 55, 9, 59, 1, 6, 59, 63, 1,
    9, 63, 67, 1, 67, 10, 71, 2, 9, 71, 75, 1, 6, 75, 79, 1, 5, 79, 83, 2, 83, 10,
    87, 1, 87, 5, 91, 1, 91, 9, 95, 1, 6, 95, 99, 2, 99, 10, 103, 1, 103, 5, 107, 2,
    107, 6, 111, 1, 111, 5, 115, 1, 9, 115, 119, 2, 119, 10, 123, 1, 6, 123, 127, 2,
    13, 127, 131, 1, 131, 6, 135, 1, 135, 10, 139, 1, 13, 139, 143, 1, 143, 13, 147,
    1, 5, 147, 151, 1, 151, 2, 155, 1, 155, 5, 0, 99, 2, 0, 14, 0
];

function func(arr) {
    var i = 0;
    var j = 3;
    var k = 1;
    var s = 2;
    for (var i = 0; i < arr.length;) {
        if (arr[i] == 99) {
            break;
        }
        var first = arr[k];
        var firstElem = arr[first];
        var second = arr[s];
        var secondElem = arr[second];
        if (arr[i] == 1) {
            var sum = firstElem + secondElem;
        } else if (arr[i] == 2) {
            var sum = firstElem * secondElem;
        }
        var change = arr[j];
        arr[change] = sum;
        i += 4;
        j += 4;
        k += 4;
        s += 4;
    }
    return arr[0];
}

func(arr);















var arr = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0,
    3, 2, 1, 10, 19, 1, 6, 19, 23, 1, 10, 23, 27, 2, 27,
    13, 31, 1, 31, 6, 35, 2, 6, 35, 39, 1, 39, 5, 43, 1,
    6, 43, 47, 2, 6, 47, 51, 1, 51, 5, 55, 2, 55, 9, 59, 1,
    6, 59, 63, 1, 9, 63, 67, 1, 67, 10, 71, 2, 9, 71, 75, 1,
    6, 75, 79, 1, 5, 79, 83, 2, 83, 10, 87, 1, 87, 5, 91, 1,
    91, 9, 95, 1, 6, 95, 99, 2, 99, 10, 103, 1, 103, 5, 107,
    2, 107, 6, 111, 1, 111, 5, 115, 1, 9, 115, 119, 2, 119, 10,
    123, 1, 6, 123, 127, 2, 13, 127, 131, 1, 131, 6, 135, 1, 135,
    10, 139, 1, 13, 139, 143, 1, 143, 13, 147, 1, 5, 147, 151, 1,
    151, 2, 155, 1, 155, 5, 0, 99, 2, 0, 14, 0
];

function func(arr) {
    var i = 0;
    var j = 3;
    var k = 1;
    var s = 2;
    for (var i = 0; i < arr.length;) {
        // debugger;
        if (arr[i] == 99) {
            // debugger;
            break;
        }
        do {
            var f = parseInt(Math.random() * 100);
            var first = arr[f];
            // debugger;
            var p = parseInt(Math.random() * 100);
            var second = arr[p];
            // debugger;
        } while (f < 0 && f > 99 && p < 0 && p > 99)
        // debugger;
        if (arr[i] == 1) {
            // debugger;
            var sum = first + second;
            var result = '' + first + second;
        } else if (arr[i] == 2) {
            // debugger;
            var sum = first * second;
            var result = '' + first + second;
        }
        // debugger;
        var change = arr[j];
        arr[change] = sum;
        i += 4;
        j += 4;
        k += 4;
        s += 4;
    }
    // debugger;
    if (arr[0] == 19690720) {
        // debugger;
        return result;
    }
}

func(arr);