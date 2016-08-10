function solve(args) {
    var dimensions = args[0].split(' ').map(Number),
        rows = dimensions[0],
        numberOfJumps = dimensions[2],
        cols = dimensions[1],
        visited = {},
        startPoint = args[1].split(' ').map(Number),

        jumps = args.slice(2).map(function (item) {
            return item.split(' ').map(Number);
        }),

        sum = 0,
        path = 0,
        row = startPoint[0],
        col = startPoint[1],
        nextRow = row,
        nextCol = col;

    while (1) {

        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            return 'escaped ' + sum;
        }

        if (visited[row * cols + col + 1]) {
            return 'caught ' + path;
        }

        sum += (row * cols + col + 1);
        nextRow += jumps[path % numberOfJumps][0]; 
        nextCol += jumps[path % numberOfJumps][1];
        path += 1;

        visited[row * cols + col + 1] = true;
        row = nextRow;
        col = nextCol;
    }
}