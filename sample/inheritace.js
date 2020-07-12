// 상속은 로직은 재활용한다는 장점을 가짐. 부모 객체가 가지는 속성을 그대로 이용 가능

function Person(name){
    this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function(){
    console.log('my name is ' + this.name);
    
}

function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
    console.log('hello, world');
}

var p = new Person('ssung');
console.log(p.introduce());


