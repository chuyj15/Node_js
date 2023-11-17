const number = [1,2,3,4,5]

const square = number.map( (num)=>{return num * num} )
console.log(square)

const sum = number.reduce( (accumulator, currentValue, index, number)=>{
    return accumulator + currentValue
}, 0)
console.log(sum)

c