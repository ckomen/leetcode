function isPrefixOfWord(sentence, searchWord) {
    const words = sentence.split(' '); // Split sentence into an array of words
    
    // Loop through the words
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) {
            return i + 1; // Return 1-indexed position
        }
    }
    
    return -1; // Return -1 if no word starts with searchWord
}

// Example 1
console.log(isPrefixOfWord("i love eating burger", "burg")); // Output: 4

// Example 2
console.log(isPrefixOfWord("this problem is an easy problem", "pro")); // Output: 2

// Example 3
console.log(isPrefixOfWord("i am tired", "you")); // Output: -1
