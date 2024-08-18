let a = prompt("Enter value 1")
let c = prompt("Enter operation")
let b = prompt("Enter value 2")


let random = Math.random()

let obj = {
    "+":"-",
    "-":"*",
    "*":"/",
    "/":"**"
}

if (random>0.1) {
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}