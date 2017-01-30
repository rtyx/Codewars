var isSquare = function(n) {
    var sq = Math.sqrt(n);    // 49
    if (sq % 1 != 0) {
        return false;
    } else {
        return true;
    }
};
