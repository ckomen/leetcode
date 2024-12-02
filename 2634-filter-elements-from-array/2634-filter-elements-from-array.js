// Define the filter function
function filter(arr, fn) {
    // Initialize an empty array to store the filtered elements
    const result = [];
    
    // Iterate over each element of the input array
    for (let i = 0; i < arr.length; i++) {
        // Apply the filtering function
        if (fn(arr[i], i)) {
            // Add element to result if fn returns a truthy value
            result.push(arr[i]);
        }
    }
    
    // Return the filtered array
    return result;
}

// Example 1
const arr1 = [0, 10, 20, 30];
const fn1 = function greaterThan10(n) { return n > 10; };
console.log(filter(arr1, fn1)); // Output: [20, 30]

// Example 2
const arr2 = [1, 2, 3];
const fn2 = function firstIndex(n, i) { return i === 0; };
console.log(filter(arr2, fn2)); // Output: [1]

// Example 3
const arr3 = [-2, -1, 0, 1, 2];
const fn3 = function plusOne(n) { return n + 1; };
console.log(filter(arr3, fn3)); // Output: [-2, 0, 1, 2]
