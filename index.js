// MILD
// Create an array called truths and store 3 true facts about yourself
let truths = ["Soccer player","I Have a cat","I'm 15 years old"]


// console log the 1st element (element is not same as index!)

console.log(truths[0])

// change the value of the last element
truths[2] = "I am Mexican"

// console log the last element to check that it's changed
console.log(truths[2])

// MEDIUM
// Create a second array calles lies and store 3 fake facts about yourself
let lies = ["I am 17 years old", "I have a Dog", "I live in Maryland"]

// delete a value from the lies array
lies.pop()

// console log the second list to confirm the value is gone
console.log(lies)

// add a new lie to the lies array
lies.push("I have a car")
console.log(lies)
// SPICY
// pick the truths or lies array and console log the 1st element
console.log(lies[0])

// prompt the user to guess if it was true or false
let guess = prompt("Is that true or false?")



// stretch: how could you check they are right or wrong?
if (guess == "true"){
console.log("You are wrong!")
}

else{ (guess == "false")
 console.log("You are right!")
}

