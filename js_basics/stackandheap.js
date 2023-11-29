//Stack(Primitive) and Heap(Non - Primitive)

let myName = "Anand"
console.log(myName); 
let sameName = myName
myName = "Suman"

console.log(myName);  //Initial value doesn't change//

let myDetails = {
    name: "Anand",
    email: "anand@anand.com"

}

let sameDetails = myDetails

sameDetails.email = "suman@gmail.com"

console.log(sameDetails.email)
console.log(myDetails.email)
