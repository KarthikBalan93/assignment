# Balanced Substrings, Fibonacci Numbers, and Migrate Rings

This repository contains solutions to three programming problems: calculating the nth Fibonacci number, finding the longest balanced substrings in a given string, and simulating the movement of rings. The solutions are implemented in JavaScript and can be accessed through specific API endpoints using a Node.js server.

## How to Run the Code

1. **Clone this repository:**
   ```sh
   git clone https://github.com/KarthikBalan93/assignment.git
   cd assignment
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the server:**
   ```sh
   npm start
   ```

   The server will be running at `http://localhost:3000/`.
   
4. **Postman Collection:**
   - Use the provided Postman collection file `Assignment.postman_collection` to test the three APIs (`/api/fibonacci/:value`, `/api/balancedstring/:value`, and `/api/migraterings/:value`) with different inputs and scenarios.

## Problem 1: Fibonacci Numbers

### Problem Description:

Write a simple application using a recursive function that accepts a value (integer) and returns the fibonacci value at that position in the series.
The application should be performant at scale to handle larger numbers without slowing down exponentially.

### Solution:

The `getFibonacci` function calculates the nth Fibonacci number using an iterative approach. It starts with the first two Fibonacci numbers (0 and 1) and iteratively calculates the subsequent Fibonacci numbers until it reaches the specified position `n`. The Fibonacci value is returned as a string to avoid exponential format.

#### Algorithm:

1. Initialize variables `a` and `b` with the first two Fibonacci numbers (0 and 1).
2. Iterate from 2 to `n` and calculate the next Fibonacci number as the sum of `a` and `b`.
3. Update `a` and `b` with the last two Fibonacci numbers calculated.
4. Return the nth Fibonacci number as a string.

### API Endpoint:

- **Endpoint:** `/api/fibonacci/:value`

### Example Request:

```
GET /api/fibonacci/10
```

### Example Response:

```json
89
```

## Problem 2: Longest Balanced Substrings

### Problem Description:

A string is balanced if it consists of exactly two different characters and both of those characters appear exactly the same number of times. For example: "aabbab" is balanced (both 'a' and 'b' occur three times) but "aabba" is not balanced ('a' occurs three times, 'b' occurs two times). String "aabbcc" is also not balanced (it contains three different letters).A substring of string S is a string that consists of consecutive letters in S. For example: "ompu" is a substring of "computer" but "cmptr" is not.Write a function solution called getBalancedSubstrings(List<String> S) that, given a string S, returns an array of the longest balanced substring of S.Examples:
1. Given S = "cabbacc", the function should return ["abba"] because it is the longest balanced substring.
2. Given S = "abababa", the function should return ["ababab", "bababa"] which are the longest balanced substrings.
3. Given S = "aaaaaaa", the function should return [] since S does not contain a balanced substring.Write an efficient algorithm for the following assumptions:
 - N is an integer within the range [1..100,000];
 - string S is made only of lowercase letters (a−z).

### Solution:

The `getBalancedSubstrings` function takes a string as input and finds the longest balanced substrings in the given string. It iterates through all substrings of the input string, checks if each substring is balanced (contains exactly two different characters with the same frequency), and keeps track of the longest balanced substrings found so far.

#### Algorithm:

1. Iterate through all substrings of the input string.
2. For each substring, check if it is balanced using a helper function `isBalanced`.
3. If a balanced substring is found and its length is greater than or equal to the maximum length found so far, update the maximum length and store the substring.
4. Return the list of longest balanced substrings found.

### API Endpoint:

- **Endpoint:** `/api/balancedstring/:value`

### Example Request:

```
GET /api/balancedstring/cabbacc
```

### Example Response:

```json
["abba"]
```

## Problem 3: Migrate Rings

### Problem Description:

You're given 3 plates (A, B, C) and an N number of rings labelled according to the diameter of each ring. For instance, Ring 5 has 5cm diameter and hence is larger than Ring 4 (4cm diameter) and Ring 3 (3cm diameter) etc.Write a function solution named "migrateRings(N, A, B, C)" that accepts a positive integer input; N denoting the number of Rings labelled from 1 to N as their respective diameter sizes. These provided Rings are sorted in ascending order on Plate A denoted by the input A. The task is to move all the rings from Plate A to Plate B using Plate C as help for auxillary holder. The function should return an array of the steps required to migrate N Rings from Plate A to Plate B.
At the end of the solution, all Rings should be sorted on Place B just as it was on Plate A.Examples:
1. Given N = 2, the function should return ["1: A to C", "2: A to B", "1: C to B"] which corresponds to the movements of each Ring on each Plate.
2. Given N = 3, the function should return ["1: A to B", "2: A to C", "1: B to C", "3: A to B", "1: C to A", "2: C to B", "1: A to B"]
3. Given N = 1, the function should return ["1: A to B"]Write an algorithm that assumes the following conditions:
 - Only one Ring can be moved at a time
 - A larger Ring cannot be placed on top of a smaller Ring. Example, Ring 4 can only be placed on Ring 5+ and not on any of Ring 3-
 - Ring diameter cannot be negative

### Solution:

The `migrateRings` function simulates the movement of rings from one plate to another using an auxiliary plate. It takes the number of rings `N` and optional parameters for source, target, and auxiliary plates. The function recursively moves the rings from the source plate to the target plate, using the auxiliary plate as an intermediate step.

#### Algorithm:

1. Define a recursive function `moveRing` that takes the number of rings `n`, source plate, target plate, and auxiliary plate as parameters.
2. If `n` is 1, move the ring from the source plate to the target plate and return the step.
3. Otherwise, recursively move `n - 1` rings from the source plate to the auxiliary plate, move the remaining ring from the source plate to the target plate, and then recursively move `n - 1` rings from the auxiliary plate to the target plate.
4. Keep track of the steps in the format `"n: source to target"` and return the list of steps.

### API Endpoint:

- **Endpoint:** `/api/migraterings/:value`

### Optional Query Parameters:

- `plate1`: Source plate (default: "A")
- `plate2`: Target plate (default: "B")
- `plate3`: Auxiliary plate (default: "C")

### Example Request:

```
GET /api/migraterings/3?plate1=A&plate2=B&plate3=C
```

### Example Response:

```json
["1: A to B", "2: A to C", "1: B to C", "3: A to B", "1: C to A", "2: C to B", "1: A to B"]
```

## Dependencies

- **Express.js:** Web framework for handling HTTP requests.
