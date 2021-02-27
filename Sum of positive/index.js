function positiveSum(arr) {
    let total = 0;
    for (var i=0; i<=arr.length; i++) {
      if (arr[i]>=0) {
        total += arr[i];
      } else {
        total+= 0;
      }
    }
    return total;
  }