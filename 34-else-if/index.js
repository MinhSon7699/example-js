function getTicket(person){
    var giave = 100000;
    if(person.age < 15){
        return 100000*0.8;
    } else if(person.age > 60){
        return 100000*0.9;
    } else {
        return giave;
    }
}

var person ={
    age: 20
};
var fee = getTicket(person);
console.log(fee);
