let a= +prompt(`Enter value number  1`)
let b= prompt(`Enter operator`)
let c= +prompt(`Enter value number  2`)

let rand =Math.random()
console.log(rand)

if(rand<0.1){
    if(b == "+"){
        alert(`the result is ${a-c}`)
    }
    if(b == "-"){
        alert(`the result is ${a+c}`)
    }
    if(b == "*"){
        alert(`the result is ${a/c}`)
    }
    if(b == "/"){
        alert(`the result is ${a*c}`)
    }
    
    
}
else{
    if(b == "+"){
        alert(`the result is ${a+c}`)
    }
    if(b == "-"){
        alert(`the result is ${a-c}`)
    }
    if(b == "*"){
        alert(`the result is ${a*c}`)
    }
    if(b == "/"){
        alert(`the result is ${a/c}`)
    }
}