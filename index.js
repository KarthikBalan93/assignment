/**
 * Calculates the nth Fibonacci number using recursion.
 * @param {number} n - The position of the Fibonacci number to be calculated.
 * @returns {number} The Fibonacci number at the specified position.
 */
function getFibonacci(n) {
    if (n <= 1) {
        return BigInt(n);
    }

    let a = BigInt(0);
    let b = BigInt(1);
    let temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    
    return b.toString();
}

function isBalanced(substring) {
    const charCount = new Map();
    for (let char of substring) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    return charCount.size === 2 && [...charCount.values()][0] === [...charCount.values()][1];
}

/**
 * Finds and returns the longest balanced substrings in the given string.
 * A substring is balanced if it consists of exactly two different characters
 * and both characters appear exactly the same number of times.
 * @param {string} S - The input string from which to find balanced substrings.
 * @returns {Array} An array containing the longest balanced substrings in the input string.
 */
function getBalancedSubstrings(S) {  
    let longestBalancedSubstrings = [];
    let maxLen = 0;

    for (let i = 0; i < S.length; i++) {
        for (let j = i + 2; j <= S.length; j++) {
            const substring = S.slice(i, j);
            if (isBalanced(substring) && substring.length >= maxLen) {
                if (substring.length > maxLen) {
                    longestBalancedSubstrings = [substring];
                    maxLen = substring.length;
                } else {
                    longestBalancedSubstrings.push(substring);
                }
            }
        }
    }

    return longestBalancedSubstrings;
}

/**
 * Moves a set of rings from one source plate to another target plate using an auxiliary plate.
 *
 * @param {number} N - The number of rings to be moved.
 * @param {string} A - The source plate from which rings are initially placed.
 * @param {string} B - The target plate to which rings need to be moved.
 * @param {string} C - The auxiliary plate used as a helper during the ring movement.
 * @returns {Array} An array of steps indicating the movement of rings in the format ["n: source to target"].
 */
const migrateRings = (N, A = "A", B = "B", C = "C") => {
    const steps = [];

    function moveRing(n, source, target, auxiliary) {
        if (n === 1) {
            steps.push(`${n}: ${source} to ${target}`);
        } else {
            moveRing(n - 1, source, auxiliary, target);
            steps.push(`${n}: ${source} to ${target}`);
            moveRing(n - 1, auxiliary, target, source);
        }
    }

    moveRing(N, A, B, C);
    return steps;
}

module.exports = {
    getFibonacci,
    getBalancedSubstrings,
    migrateRings
}