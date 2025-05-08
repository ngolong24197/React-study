


// For Loop
for (let i = 0 ; i < 5 ; i++){
    console.log(`Hello ${i} times`)
}
let total : number = 0;
let average: number = 0;
let randomNumber : number[] = [2,3,6,1,2,4,56,62];
for (let i = 0; i< randomNumber.length; i++){
    console.log(`Random Number: ${randomNumber[i]}`)
    total += randomNumber[i];

}
average = total/randomNumber.length
console.log(`Total: ${total}, Average: %${average}`)


// Array
let randomChar : string[] = ['1','2','3','4','5','6','7','8','9'];
for (let tempChar of randomChar){
    console.log(`Random Char: {tempChar}`)
}


//Conditional

let randomSport : string[] = ['Soccer','Baseball','Basketball','Tennis','Golf'];

for(let sport in randomSport){
    if (sport == 'Soccer'){
        console.log(`I Like ${sport}`)
    }
    else {
        console.log (`I don't like ${sport}`)
    }
}