// 1234 // 10011010010 // 5

var countBits = function(number) {
    var biNumber = [];
    var bits = 0;
    function toBinary(number) {
        var quotient = Math.floor(number/2);
        var remainder = (number%2);
        biNumber.push(remainder);
        if (quotient != 0) {
            toBinary(quotient);
        }
        biNumber = biNumber.reverse();
    }
    function count(biNumber) {
        for (var i = 0; i < biNumber.length; i++) {
            if (biNumber[i] == 1) {
                bits += 1;
            }
        }
        console.log(bits);
    }
    toBinary(number);
    count(biNumber);
    return(bits);
};

countBits(0);
countBits(4);
countBits(7);
countBits(9);
countBits(10);
countBits(1234);
