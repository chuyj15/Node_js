function regularFunction(){
    console.log(arguments)
}

regularFunction(1, 'hello', true);


const arrowFunction = ()=>{
    console.log(arguments)
}

arrowFunction(1, 'hello', true)


let array = [1,2,3,4,5]
array.forEach( function(item, index, array){
    console.log(`item(${index}) : ${item}`);
})

