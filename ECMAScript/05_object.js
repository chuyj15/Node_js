let person1 = {
    name : '추윤주',
    age : 28,
    gender : '여', 
    like : '샐러디아'
}

const {name, age, ...rest} = person1
console.log(name)
console.log(age)
console.log(rest)

//계산 된 속성명
const key = '성별'
const person2 = {
    name : '추윤주',
    age : 28,
    [key] : '여', 
    like : '샐러디아'
}

console.log(person2)

//메서드 축약
const obj1 = {
    method1 : function(){ console.log("기본방식으로메소드 정의")}
}
const obj2 =  {
    method1(){console.log("향상된방식으로 메소드 축약해서 사용했습니당. . ..")}
}

obj1.method1()
obj2.method1()

const numbers = [1,2,3,4,5]
const [variable1, variable2, ...rest2] = numbers
console.log(variable1)
console.log(variable2)
console.log(rest2)


function