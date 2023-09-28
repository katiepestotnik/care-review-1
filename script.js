let temp = 100
temp = 77
temp = 50

if (temp>90) {
    console.log('it is hot')
} else if (temp > 70) {
    console.log('it is pretty nice')
} else {
    console.log('nothing above is true!')
}



const foods = ['pizza', 'ice cream', 'salad']
// for loop
console.log(foods.length, 'this is length of array')
for (let i = 0; i < foods.length; i++){
    console.log(i, 'this is iterator')
    //this logs each item using i
    console.log(foods[i])
}
//for of you don't have accces to index value but much easier syntax
for (let food of foods) {
    // using template literals for the console.log() inject variable with ${}
    console.log(`${food} is soooo good!`)
}



const myDog = {
    name: 'Klondike',
    breed: 'Goldent Retriever',
    activies: ['fetching the ball', 'hiking'],
    age: 6.5
}

function calculate(num1, num2, operator){
    let result
}
console.log(calculate(2, 4, 'add'))
