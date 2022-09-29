//Code your solutions in this file
function fiveToOneHundread(){
    for(let i = 5; i <= 100; i ++){
        console.log(i);
    }
}
console.log(fiveToOneHundread())


function multiplesOfThree(){
    for(let i = 3; i <= 100; i += 3){
        console.log(i);
    }
}
/*
multiplesOfThree();
/*
function multiplesOfThreeOrFive(){
    for(let i = 3; i <= 100; i += 3){
        console.log(i);
    }
}
*/
function multiplesOfThreeOrFive(){
    for(let i = 0; i <= 100; i ++){
        if( i % 3 == 0 || i % 5 == 0){
            console.log(i)
        }
    }
}
console.log(multiplesOfThreeOrFive())