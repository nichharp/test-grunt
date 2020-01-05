function tmp() {
    let ages = [1,2,3,4,5,6,7,8,9];
    let agesTimesTwo = ages.map(el=>{
        return el*2
    });
    console.log(agesTimesTwo);
}

tmp();

function add(num1, num2) {

    let returnValue = 0;

    for (let i = 0; i < num1; i++) {
        returnValue++;
    }

    for (let i = 0; i < num2; i++) {
        returnValue++;
    }

    return returnValue;
}

