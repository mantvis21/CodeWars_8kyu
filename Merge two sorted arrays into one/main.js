function mergeArrays(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr2.splice(j, 1);
            }
        }
    }
    var result = arr1.concat(arr2);
    return result.sort(function (a, b) { return a - b })
}