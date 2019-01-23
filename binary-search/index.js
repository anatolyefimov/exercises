module.exports = function(arr, el) {
    let n = arr.length;
    let l = 0;
    let r = n  - 1;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (arr[m] === el) {
            return m;
        }
        if (arr[m] > el) {
            r = m - 1;
        }
        else {
            l = m + 1;
        }
    }
    return (arr[l] === el ? l : -1)
}