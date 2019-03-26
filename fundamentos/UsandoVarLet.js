const funcs = []

for(var i=0; i<10 ; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// ----------------------------------------------------------

const funcx = []

for(let i=0; i<10 ; i++){
    funcx.push(function(){
        console.log(i)
    })
}

funcx[2]()
funcx[8]()