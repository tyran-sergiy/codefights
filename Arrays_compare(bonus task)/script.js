/*jshint esversion: 6 */

function isPrime(value) {
    for (var i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

function minPrime(n) {

    while (!isPrime(n)) {
        n++;
    }
    return n;
}

function* prime() {
    var numb = 0;

    while (true) {
        if (isPrime(numb)) {
            yield numb++;
        } else numb++;
    }
}

function getX(n) {
    let rightNumb = Math.pow(2, n) - 1;
    let leftNumb = -rightNumb;
    let x = [];

    for (let i = leftNumb; i <= rightNumb; i++) {
        x.push(i);
    }


    x.splice(rightNumb, 1); //delete 0
    return x;
}


function getArray(n, v) {

    let xArr = getX(n);
    let result = [];
    let P = minPrime(n * xArr.length);

    for (var x of xArr) {

        //result.push( x>0 ? x*v: P - (x*v) );

        result.push((x * v) % P);
    }
    return result;

}


function start(n, m) {

    let array = [];
    let v;
    let xArr = getX(n);
    let result = {
        array: [],
        v: []
    };
    const primeGen = prime();


    while (array.length < (m * xArr.length)) {

        v = primeGen.next().value;
if( v ==  minPrime(n * xArr.length) )
{
    v = primeGen.next().value;
}
        let tempArr = getArray(n, v);

        let hasSame = tempArr.some((value) => {
            return array.indexOf(value) !== -1;
        });
console.log(tempArr);
console.log(v);
        if (!hasSame) {
            array = array.concat(tempArr);
            result.v.push(v);
        }

    }
    result.array = array;
    return result;
}
