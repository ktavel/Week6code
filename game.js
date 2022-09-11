let suits = [
    'Hearts',
    'Spades',
    'Diamonds',
    'Clubs',
];

let rank = [
    14,//'Ace',
    13,//'King',
    12,//'Queen',
    11,//'Jack',
    10, 
    9, 
    8, 
    7, 
    6, 
    5, 
    4, 
    3, 
    2
];

class card{
    constructor(value, rank){
        this.card = card;
    }

}

class deck{
    constructor(){
        this.deck = [];
    }

    pushCard(card){
        this.deck.push(card);
    }

    createCard(value,rank){
        const aCard = new card();
        aCard.value = value;
        aCard.rank = rank;
        this.deck.push(aCard);
    }

    getDeck(){
        return this.deck;
    }

    getLength(){
        return this.deck.length;
    }

    removeCard(i){
        this.deck.splice(i);
        
    }
}

class player{
    constructor(name,points){
        this.player = player;
        this.myCards = [];
        this.points = 0;
    }
    addCard(value,rank){
        const aCard = new card();
        aCard.value = value;
        aCard.rank = rank;
        this.myCards.push(aCard);
    }
    getDeck(){
        return this.myCards;
    }
    addPoint(){
        this.points++;
    }
    getPoints(){
        return this.points;
    }

}



function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


function decide(p1Card,p2Card){

    //console.log(p1Card.value +" "+p2Card.value);
    try{
           if(p1Card.value > p2Card.value){
        player1.addPoint();
    }
    
    else{
        if(p2Card.value > p1Card.value){
            player2.addPoint();
        }
        }    
    }
    catch{
        console.log("undefinded detected");
    }

    }

    






//Main

const aDeck = new deck();
//populates card deck
for(let i = 0; i<14;i++){
    for(let j = 0; j<4;j++){
        aDeck.createCard(rank[i],suits[j]);
    }
}
//removes undefined cards
for(let i = 0; i<aDeck.getLength();i++){
    if (aDeck.getDeck()[i].value === undefined){
        aDeck.getDeck().splice(i);
    }
}

// for(let i = 0; i<aDeck.getLength();i++){
//     console.log(aDeck.getDeck()[i]);
// }



//creates players
const player1 = new player("Player 1",0);
const player2 = new player("Player 2",0);


//Shuffles cards
shuffleArray(aDeck.getDeck());

// //---------------------------
// for(let i = 0; i<aDeck.getLength(); i++){
//     if(aDeck.getDeck()[i].value === undefined){
//         aDeck.getDeck()[i].value = 20;
//     }
// }
// //----------------------------

//Console log cards and length
// for(let i = 0; i<=52; i++){
//     console.log(aDeck.getDeck()[i]);
//  }
//  console.log(aDeck.getLength());
 //--------------------------------

 //Divide cards
// for(let i = 0; i<29; i++){
//     if(aDeck.getDeck()[i].value == 20){
//         continue;
//     }
//     else{
//         player1.addCard(aDeck.getDeck()[i].value,aDeck.getDeck()[i].rank);
//     }
    
// }
// for(let i = 28; i<29; i++){
//     if(aDeck.getDeck()[i].value == 20){
//         continue;
//     }
//     else{
//         player2.addCard(aDeck.getDeck()[i].value,aDeck.getDeck()[i].rank);
//     }
// }

//Dividing the cards
const list = aDeck.getDeck();
const half = Math.ceil(list.length / 2);

const p1half = list.slice(0,half);
const p2half = list.slice(half);


//Playing the game...
for(let i = 0;i<29;i++){
    decide(p1half[i],p2half[i]);
}

// for(let i = 0; i<=52; i++){
//     if (player1.getDeck()[i].value === undefined){
//         player1.getDeck()[i].value = 20;
//     };
//  }

//  for(let i = 0; i<=52; i++){
//     if(player1.getDeck()[i] != undefined){
//      console.log(player1.getDeck()[i]);   
//     }
    
//  }

// Announces the winner
if(player1.getPoints() > player2.getPoints()){
    alert("Player 1 wins!");
       console.log(player1.getPoints())
       console.log(player2.getPoints())
}
else{
    if(player2.getPoints() > player1.getPoints()){
    alert("Player 2 wins!");
        console.log(player1.getPoints())
        console.log(player2.getPoints())
    }
    else{
        alert("Tie");
    }
    
}




