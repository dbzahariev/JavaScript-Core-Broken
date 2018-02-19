function findSubsequence(input) {
    input = input.map(Number);
    let arr = [];
    let biggest;
    input.forEach(function (e) {
        if (biggest !== undefined) {
            if (e >= biggest) {
                arr.push(e);
                biggest = e;
            }
        }
        else {
            biggest = e;
            arr.push(e);
        }
    });
    arr.forEach(e => console.log(e));
}

// findSubsequence([1,3,2,15,10,12,3,2,24]);
// findSubsequence([87, 88, 91, 10, 22, 9, 92, 94, 33, 21, 50, 41, 60, 80]);
// findSubsequence(['1','3','8','4','10','12','3','3','24']);
findSubsequence(['20', '3', '2', '15', '6', '1']);
