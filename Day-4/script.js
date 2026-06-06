let hasDiscountCode = true

// An empty string is a falsy value, so the else block will be executed
function processOrder() {
    if (hasDiscountCode) {
        console.log("Discount applied to food order!")
        hasDiscountCode = false
    }
    else {
        console.log("No discount code applied to food order.")
    }
}

processOrder()
processOrder()

// ----Comparison operators-----

console.log(4 === 3) // false
console.log(5 > 2) // true
console.log(12 < 12) // false
console.log(3 < 0) // false
console.log(3 >= 3) // true
console.log(11 <= 11) // true
console.log(3 <= 2) // false

// -------Array--------

// An array is a data structure that can hold more than one value at a time. We can store a list of items in an array and access them by their index.
// Ordered list of items that we can store in a variable. We can access the items in the array by their index, which starts at 0.
// Composite/complex data type that can hold more than one value at a time. We can store a list of items in an array and access them by their index.

let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]

console.log(featuredPosts.length) // 3
console.log(featuredPosts[0]) // "Check out my Netflix clone"
console.log(featuredPosts[2]) // "I've just relaunched my portfolio"

let cards = [7, 3]
cards.push(6) // adds 6 to the end of the array
console.log(cards) // [7, 3, 6]

// Challenge
let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here! Just applying to a bunch of jobs."
messages.push(newMessage)
console.log(messages)

// To remove the last item from an array, we can use the pop() method. This will remove the last item from the array and return it.
messages.pop()
console.log(messages)

// splice() method can be used to remove items from an array at a specific index. The first argument is the index of the item to remove, and the second argument is the number of items to remove.

// filter() method can be used to create a new array with all items that pass a test implemented by a provided function. The filter() method does not change the original array.

// indexOf() method can be used to find the index of the first occurrence of a specified value in an array. The indexOf() method returns -1 if the value is not found in the array.

// -----Loops-----

// A loop is a programming construct that allows us to repeat a block of code multiple times. We can use loops to iterate over arrays and perform operations on each item in the array.

for (let count = 10; count < 101; count += 10) {
    console.log(count)
}

let greetingEl = document.getElementById("greeting-el")
let sentence = ["Hello", "my", "name", "is", "Per"]
for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}