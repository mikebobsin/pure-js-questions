// Q1 


function showEvenValues() {
    var data = document.getElementById("evenValues").value.split(',');
    var arr = [];
    data.map(item => {
        arr.push(parseInt(item , 10))
    });
    arr.forEach((item,index) => {
        if (item > 50) {
            return true;
        }
        if (item % 2 === 0) {
            arr[index] = item * 2
        }
    })

    result("textEven", arr);
}


function showOddValues() {
    var data = document.getElementById("oddValues").value.split(',');
    var arr = [];
    data.map(item => {
        arr.push(parseInt(item , 10))
    });
    arr.forEach((item,index) => {
        if (item > 40) {
            return true;
        }
        if (item % 2 != 0) {
            arr[index] = item * 2
        }
    })

    result("textOdd", arr);

} 


// Q2

function orderArray() {

    var data = document.getElementById("getArray").value.split(',');
    var inputArray = [];

    data.map(item => {
        inputArray.push(parseInt(item , 10))
    });

    var insertValue = parseInt(document.getElementById("newValue").value, 10);
    var responseArr = [];

    inputArray.forEach(function(val, i){
        var nextValue = inputArray[i+1];
        var lastValue = inputArray[inputArray.length-1];
        var firstValue = inputArray[0]

        if(insertValue >= val && insertValue < nextValue){
            responseArr.push(val);
            responseArr.push(insertValue);
        } else if(insertValue >= lastValue && i == inputArray.length -1){
            responseArr.push(val);
            responseArr.push(insertValue);
        } else if(insertValue <= val && i == 0){
            responseArr.push(insertValue);
            responseArr.push(val);
        } else
            responseArr.push(val);
    });

    result("showArray", responseArr.join());
}

// Q3

function nonRepeatable() {
    var arr = document.getElementById("repeatableArray").value.split(',');
    var singleVal = arr.filter((val) => arr.indexOf(val) === arr.lastIndexOf(val));

    result("nonRepeatable", singleVal);
}

// Q4

function compactNumber() {
    var number = document.getElementById("packNumber").value.trim();
    var arr = [];
    arr = number.split('').map((num)=>{
        return Number(num)
    });
    var sumOne = 0;
    var sumZero = 0;
    var packedNum = '';
    
    arr.map((x,i) => {
        if (x === 1) {
            if (sumZero != 0 ) {packedNum = packedNum + sumZero + '0';};

            sumZero = 0;
            sumOne = sumOne + 1;

            if (i === arr.length - 1) {packedNum = packedNum + sumOne + '1';}
        }
        if (x === 0) {
            if (sumOne != 0 ) { 
                packedNum = packedNum + sumOne + '1';
            };

            sumOne = 0;
            sumZero = sumZero + 1;

            if (i === arr.length - 1) { 
                packedNum = packedNum + sumZero + '0';
            }
        }
    })

    result("newNumber", packedNum);
}

function undoCompactNumber() {
    var number = document.getElementById("unpackNumber").value.trim();
    var arr = [];
    arr = number.split('').map((num)=>{
        return Number(num)
    });

    var unpackedNum = '';

    arr.map((x,i) => {
        if (x > 1) {
            if(arr[i + 1] === 1 && i % 2 === 0 ) {
                unpackedNum = unpackedNum + '1'.repeat(x);
            }
            if (arr[ i + 1] === 0 && i % 2 === 0) {
                unpackedNum = unpackedNum + '0'.repeat(x)
            }
        }
    })

    result("newNumber", unpackedNum);
}

// Q5

function getArray() {
    var data = document.getElementById("result").innerHTML;
    var arr = [];
    arr = data.split(',').map((x)=>{
        return x
    });
    return arr;
}

function next() {
    var data = getArray();
    data.shift();

    result("result", data);
}

function adcVip(){
    var data = getArray();
    var position = data.findIndex(val => val === ' Normal');
 
    data.splice(position, 0, " VIP");

    result("result", data);
}

function adcNormal(){
    var data = getArray();
    data[data.length] = ' Normal';
        

    result("result", data);
}

function result(element, result) {
    var p = document.getElementById(element);
    p.innerHTML = result;
}