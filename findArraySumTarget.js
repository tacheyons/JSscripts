function twoSum(arr, target) {
    const numMap = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        numMap.set(arr[i], i);
    }
    
    return null; 
}  

twoSum([2, 7, 11, 15], 9); // Output: [0, 1] because arr[0] + arr[1] = 2 + 7 = 9