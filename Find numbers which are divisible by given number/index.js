function divisibleBy(numbers, divisor) {
    var result = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % divisor == 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}