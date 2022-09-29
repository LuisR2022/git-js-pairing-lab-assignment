//1
function fiveToOneHundread(){
    for(let i = 5; i <= 100; i ++){
        console.log(i);
    }
}
console.log(fiveToOneHundread())

//2
function multiplesOfThree(){
    for(let i = 3; i <= 100; i += 3){
        console.log(i);
    }
}
//3
function multiplesOfThreeOrFive(){
    for(let i = 0; i <= 100; i ++){
        if( i % 3 == 0 || i % 5 == 0){
            console.log(i)
        }
    }
}
console.log(multiplesOfThreeOrFive())
//4
function untilNum(int){
    for(let i = 0; i <= int; i++){
        console.log(i)
    }
}
untilNum(4)
//5
function multiply(one, two){
    return one * two;
}
console.log(multiply(2,5))
//6
function add(one, two){
    if(one == two){
        let add2 = one + two;
        return add2 * 3
    }else{
        return one + two
    }
}
console.log(add(10,5));
