function mostFrequentLengthStrings(arr){
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        let length = arr[i].length;
        if (count[length] === undefined) {
            count[length] = 1;
        } else {
            count[length]++;
        }
    }
    let maxCount = 0;
    let mostFrequentLength = 0;
    for (let length in count) {
        if (count[length] > maxCount) {
            maxCount = count[length];
            mostFrequentLength = length;
        }   
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == mostFrequentLength) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(
    mostFrequentLengthStrings(['a','ab','abc','cd','def','gh'])
);
// ['ab','cd','gh']

console.log(
    mostFrequentLengthStrings(['hi','hello','hey','yo'])
);
// ['hi','yo']

console.log(
    mostFrequentLengthStrings(['cat','dog','fish','bird'])
);
// ['cat','dog']

console.log(mostFrequentLengthStrings([]))
// []

console.log(mostFrequentLengthStrings(['a']))
// ['a']