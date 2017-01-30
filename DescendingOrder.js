function descendingOrder(n){
    var string = n.toString();
    var array = string.split("");
    var sortedArray = array.sort(function(a,b) {
        return b-a;}
    );
    var stringResult = sortedArray.join("");
    var result = parseInt(stringResult);
    return result;
}

descendingOrder(4213854);
