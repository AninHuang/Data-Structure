// Where stacks are used?
// - Undo
// - Back button
// - Recursion

// Add/Remove "End" of Array
// Insertion: O(1)
// Deletion: O(1)
const stack = [];

stack.push('www.reddit.com');
stack.push('www.reddit.com/r/abc');
stack.push('www.reddit.com/r/abc/123');
stack.pop();

console.log(stack);

// Add/Remove "Start" of Array
// Insertion: O(n)
// Deletion: O(n)
const stack2 = [];

stack2.unshift('www.reddit.com');
stack2.unshift('www.reddit.com/r/abc');
stack2.unshift('www.reddit.com/r/abc/123');
stack2.shift();

console.log(stack2);