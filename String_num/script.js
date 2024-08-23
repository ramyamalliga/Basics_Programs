function containsNumericDigits(str) {
    for (let char of str) {
        if (char >= '0' && char <= '9') {
            return true;
        }
    }
    return false;
}

console.log(containsNumericDigits("Hello123")); // true
console.log(containsNumericDigits("Hello"));    // false
console.log(containsNumericDigits("123"));      // true
