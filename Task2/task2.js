function topTwoSum(arr) {
    const max1 = Math.max(...arr);                    
    arr.splice(arr.indexOf(max1), 1);                 
    const max2 = Math.max(...arr);                    
    return max1 + max2;
}
function test(){

    const testCases = [
        {input:[1,4,2,3,5], expected:9},
        {input:[10,8,7,6], expected:18},
        {input:[5,5,3,2], expected:10},
        {input:[0,0,0,0], expected:0}

    ];

    for(let t of testCases){

        let result = topTwoSum(t.input);

        console.log("Input:", t.input);
        console.log("Output:", result);
        console.log("Expected:", t.expected);
        }
}

test();