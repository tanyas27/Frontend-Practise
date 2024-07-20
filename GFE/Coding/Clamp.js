function clampNumber(num, min, max) {
    // Math.min(num, max) ensures num doesn't exceed max
    // Math.max(result of above, min) ensures the result doesn't fall below min
    return Math.max(Math.min(num, max), min);
}

console.log(clampNumber(2, 3, 5));  // Output: 3 (2 is clamped to the lower bound of the range)
console.log(clampNumber(1, -1, -5)); // Output: -1 (1 is clamped to the upper bound of the range)
