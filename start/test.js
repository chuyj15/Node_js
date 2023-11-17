function welcome() {
    console.log('hello node.js~!');
}

welcome()

/* 
    node 자바스크립트 실행
    > node(파일 경로)
*/


const condition = true;
const promise = new Promise( (resolve, reject)=>{
    if (condition){
        resolve('성공')
    } else {
        reject('실패')
    }
} );

promise.then( (message)=>{
    console.log(message)
} )
    .catch( (error)=>{
        console.log(error)
    } )
    .finally( ()=>{
        console.log('무조건')
    } );


promise.then( (message)=>{
    return new Promise( (resolve, reject)=>{
        resolve(message)
    } )
} )
.then( (message2)=>{
    return new Promise( (resolve, reject)=>{
        resolve(message2)
    } );
} )
.then( (message3)=>{
    return new Promise( (resolve, reject)=>{
        resolve(message3)
    } )
} )


function findAndSaveUser(Users) {
    Users.findOne( (err, user)=>{  
        if (err){return console.log(err)} 
        user.name='zero'
        user.save( (err)=>{
            if (err) { return console.error(err)}
            Users.findOne( {gender: 'm'},(err,user)=>{
                //생략
            } );
        } );
    } );
}

function findAndSaveUser(Users) {
    Users.findOne( ()=>{  user.save( ()=>{ Users.findOne( ()=>{} );   } );  } );
}


function findAndSaveUser(Users){
    Users.findOne();
}


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}