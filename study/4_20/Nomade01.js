//콘솔로그
function sayHello(talk)
{
    console.log(talk);
}

sayHello("hello");
sayHello("my");
sayHello("name");


//배열
const arrayBus = ["부산", "서울", "전주"];
sayHello(arrayBus);
arrayBus[2] = "제주";
console.log(arrayBus);
arrayBus.push = "남원";
console.log(arrayBus);


//list
const player = {
    name: "먼데",
    age : "19",
}


console.log(player);
console.log(player.name);
console.log(player.age , player.name);

player.name = "홀리";
console.log(player.age , player.name);

player.mind = "bad";
console.log(player);

//콘솔로그 계산기
const cal = {
    add: function(a, b) { console.log(a + b); },
    min: function(a, b) { console.log(a - b); },
    div: function(a, b) { console.log(a / b); },
    gob: function(a, b) { console.log(a * b); },
    gob2: function(a, b) { console.log(a ** b); },
}

cal.add(5,10);
cal.min(5,10);
cal.div(5,10);
cal.gob(5,10);
cal.gob2(2,3);


//외국인 나이 계산기
const age = "33";

function forinage(age)
{
    return age -2;
}

console.log(forinage(age));

//반환 함수 계산기
const cal2 = {
    add: function(a, b) { return a + b; },
    min: function(a, b) { return a - b; },
    div: function(a, b) { return a / b; },
    gob: function(a, b) { return a * b; },
    gob2: function(a, b) { return a ** b; },
}
const add = cal2.add(2,3);
const min = cal2.min(3,4);
const div = cal2.div(15,3);
const gob1 = cal2.gob(8,10);
const gob2 = cal2.gob2(2,4);

console.log(add,min,div,gob1,gob2);


//prompt

const yourAge = prompt("당신의 연령은?");

console.log(parseInt(yourAge));


//NaN판별기

if(yourAge >= 0)
{
    console.log("정수")
}
else if(yourAge < 0)
{
    console.log("음수")
    
} 
else 
{
    console.log("문자임")   
}