const convertToChess = (p, q) => {
    const x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const result = x[p] + (q + 1)
    return result
}

const convertToCoordinates = (sq) => {
    const x = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7 }
    const result = [x[sq[0]], (sq[1] - 1)]
    return result
}
export const findPossibleMoves = (sq) => {
    let n = 8;
    let m = 8;
    let X = [2, 1, -1, -2, -2, -1, 1, 2];
    let Y = [1, 2, 2, 1, -1, -2, -2, -1];

    let result = [];

    const [p, q] = convertToCoordinates(sq)

    for (let i = 0; i < 8; i++) {

        let x = p + X[i];
        let y = q + Y[i];

        if (x >= 0 && y >= 0 && x < n && y < m)
            result.push(convertToChess(x, y))
    }

    console.log('Possible moves => ', result);
    return result;
}


