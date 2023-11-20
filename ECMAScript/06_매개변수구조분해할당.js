function functionName( {param1, param2, param3} ){
    console.log(`${param1}, ${param2}, ${param3}`)
}

let arrowFunc = ( {param1, param2, param3} )=>{
    console.log(`${param1}, ${param2}, ${param3}`)
}
const params = {
    param1 : 1,
    param2: 2,
    param3 : 3
}

functionName(params);
arrowFunc(params)

const person = {
    name : '추', 
    a-ge : 28, 
    'gend-er' : '여'
}

const { name, age, ...rest } = person
console.log(name)   //추
console.log(a-ge)   //28-
console.log(rest)   // { gender: '여' }
