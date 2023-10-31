function endsWith(x, y) {

    if (x === null || x === undefined || y === null || y === undefined) {
        throw new Error('Invalid input');
    }

    let index = x.lastIndexOf(y);
    return x.lastIndexOf(y) === x.length - y.length;
}