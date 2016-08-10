function solve(lines) {
    var valley = lines[0].split(',').map(Number);

    function isOutside(valley, index) {
        return valley[index] === undefined;
    }

    function coinsForPattern(valley, pattern) {
        var visited = [],
            coins = 0,
            index = 0,
            patternIndex = 0;

        while(!visited[index] && !isOutside(valley, index)){
            coins += valley[index];
            visited[index] = true;

            index += pattern[patternIndex];

            patternIndex = (patternIndex + 1) % pattern.length;
        }
        return coins;
    }
    console.log(coinsForPattern(valley, pattern));
}