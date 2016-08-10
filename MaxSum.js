function solve(args) {
    var numbers = args.slice(1).map(Number);
    var bestSum = numbers[0];

    for (var i = 0; i < numbers.length; i += 1) {
        var currentSum = 0;
        for (var j = i; j < numbers.length; j += 1) {
            currentSum += numbers[j];
            if (currentSum > bestSum) {
                bestSum = currentSum;
            }
        }

    }

    return bestSum;
}