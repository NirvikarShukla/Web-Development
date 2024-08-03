// let a={
//     x:"apple",
//     y:"grapes"
// }

// let b={
//     s:"bannana",
//     t:"mango"
// }

// a.__prototype__=b

class animal{
    constructor(name){
        this.name=name
         console.log("Constructor Created");
    }

    eats()
    {
        console.log('Khata hoon');
    }

    jumps(){
        console.log('Kood raha hu');
    }
}

class lion extends animal{
    constructor(name){
        super(name)
        console.log("2 constructor created")
    }
    roar(){
        console.log('Dahad raha hu');
    }
}
let l=new lion("Shera")
console.log(l);