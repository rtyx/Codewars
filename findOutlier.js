function findOutlier (integers) {
    var oddFlag = 0;
    var evenFlag = 0;
    for (var i = 0; i < 3; i++) {
        if (integers[i] % 2 === 0) {
            evenFlag += 1;
        } else {
            oddFlag += 1;
        }
    }
    if (oddFlag > evenFlag) {
        var result = integers.filter(function(n) {
            return n % 2 == 0;
        });
    } else {
        result = integers.filter(function(n) {
            return n % 2 != 0;
        });
    }
    return result.pop();
}

findOutlier([0, 1, 2]);
findOutlier([1, 2, 3]);
findOutlier([2,6,8,10,3]);
findOutlier([0,0,3,0,0]);
findOutlier([1,1,0,1,1]);
