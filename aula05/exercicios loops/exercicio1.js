//setup
const valoresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function criaPares (valoresNum) {
    for(let i = 0; i < valoresNum.length; i++) {
        if (valoresNum[i] % 2 === 0) {
            console.log(valoresNum[i])
        }
    }
}

criaPares(valoresNum)