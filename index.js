const namesArr = ["Ada", "Brendan", "Ali"]

function writeCards( namesArr, event ){
    let thankYouCards = []
    for ( let i = 0; i < namesArr.length; i++ ){
        thankYouCards.push( `Thank you, ${namesArr[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
}
// console.log(writeCards(namesArr,"birthday"))

function countDown( startingNum ){
    while ( startingNum > 0 ) {
        console.log( startingNum );
        startingNum -= 1;
    }
    console.log( startingNum );
}

// console.log(countDown(10))


