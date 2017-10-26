class User {
    constructor(data){
        this.data = data
    }
}

let arr = []

let angga = {
    name:'angga',
    password:'12345',
    email:"hotmail.com"
}


user = new User (angga)


arr.push(user)
arr.push(user)
console.log(arr)