// Code your solutions in this file
function writeCards(names, event) {
    let card_array = [];
    for (let i = 0; i < names.length; i++){
        card_array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return card_array;
}

function countDown(number){
    while(number >= 0){
        console.log(number);
        number--;
    }
}