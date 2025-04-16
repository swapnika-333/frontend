let animal={
    eats: true,
    walk() {
        console.log("Animal walks")
    }
};

let rabbit = {
    jumps: true,
    _proto_:animal
};

let runfast= {
    _proto_: rabbit
}

runfast.walk();

var employee1={firstname: "shiny", lastname:"swapnika"};
var employee2={firstname:"lucky",lastname:"sukrutha"};

function invite(greetings1, greetings2){
    console.log(
        greetings1+""+this.firstname+""+this.lastname+","+greetings2
    );
}
invite.call(employee2,"Hello","How are you");
invite.apply(employee1,["Hello","How are you?"]);
