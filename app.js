/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let currentPlayer = "X";
let moveCount = 0;
gameOver = false;


/*------------------------ Cached Element References ------------------------*/
const squareButton0 = document.getElementById('0');
const squareButton1 = document.getElementById('1');
const squareButton2 = document.getElementById('2');
const squareButton3 = document.getElementById('3');
const squareButton4 = document.getElementById('4');
const squareButton5 = document.getElementById('5');
const squareButton6 = document.getElementById('6');
const squareButton7 = document.getElementById('7');
const squareButton8 = document.getElementById('8');

const messageElement = document.querySelector('#message');
const resetButton = document.querySelector('#reset');

/*-------------------------------- Functions --------------------------------*/
function switchPlayers(player) 
{
    if(currentPlayer==='X')
        currentPlayer ='O';
    else if(currentPlayer==='O')
        currentPlayer= 'X';
}
function checkWinner(player){
    //checks the 3 rows
    if((squareButton0.textContent===currentPlayer)&&(squareButton1.textContent===currentPlayer)&&(squareButton2.textContent===currentPlayer)){
        gameOver= true;
        messageElement.textContent =`${currentPlayer} wins`;
    }
    else if((squareButton3.textContent===currentPlayer)&&(squareButton4.textContent===currentPlayer)&&(squareButton5.textContent===currentPlayer)){
        gameOver= true;
        messageElement.textContent =`${currentPlayer} wins`;
    }
    else if((squareButton6.textContent===currentPlayer)&&(squareButton7.textContent===currentPlayer)&&(squareButton8.textContent===currentPlayer)){
        gameOver= true;
        messageElement.textContent =`${currentPlayer} wins`;
    }

    //checks the columns
    else if((squareButton0.textContent===currentPlayer)&&(squareButton3.textContent===currentPlayer)&&(squareButton6.textContent===currentPlayer)){
        gameOver= true;
        messageElement.textContent =`${currentPlayer} wins`;
    }
    else if((squareButton1.textContent===currentPlayer)&&(squareButton4.textContent===currentPlayer)&&(squareButton7.textContent===currentPlayer)){
        gameOver= true;
        messageElement.textContent =`${currentPlayer} wins`;
    }
    else if((squareButton2.textContent===currentPlayer)&&(squareButton5.textContent===currentPlayer)&&(squareButton8.textContent===currentPlayer)){
        gameOver= true;
        messageElement.textContent =`${currentPlayer} wins`;
    }

    //checks the diagonals
    else if((squareButton0.textContent===currentPlayer)&&(squareButton4.textContent===currentPlayer)&&(squareButton8.textContent===currentPlayer)){
        gameOver= true;
        messageElement.textContent =`${currentPlayer} wins`;
    }
    else if((squareButton2.textContent===currentPlayer)&&(squareButton4.textContent===currentPlayer)&&(squareButton6.textContent===currentPlayer)){
        gameOver= true;
        messageElement.textContent =`${currentPlayer} wins`;
    }

}
function checkTie(count){
    if (count===9){
        gameOver = true;
        messageElement.textContent= "tie!";
    }

}
function message(){
    if(gameOver===false)
    messageElement.textContent = `It is ${currentPlayer}'s turn!` ;
}
message () //calling the message function at game start to display X turn

function reset(){
    squareButton0.textContent='';
    squareButton1.textContent='';
    squareButton2.textContent='';
    squareButton3.textContent='';
    squareButton4.textContent='';
    squareButton5.textContent='';
    squareButton6.textContent='';
    squareButton7.textContent='';
    squareButton8.textContent='';

    currentPlayer="X";
    gameOver= false;
    messageElement.textContent = `It is ${currentPlayer}'s turn!`;

}

/*----------------------------- Event Listeners -----------------------------*/
squareButton0.addEventListener('click',() => {
    if((squareButton0.textContent==='') &&(gameOver === false)){
        squareButton0.textContent = currentPlayer;
        moveCount ++;
        checkWinner(currentPlayer);
        checkTie(moveCount);
    
        switchPlayers(currentPlayer);
    message();
    }
})

squareButton1.addEventListener('click',() => {
    if((squareButton1.textContent==='') &&(gameOver === false))
        {
            squareButton1.textContent = currentPlayer;
            moveCount ++;
            checkWinner(currentPlayer);
            checkTie(moveCount);
    switchPlayers(currentPlayer);
    message();
    }
})
squareButton2.addEventListener('click',() => {
    if((squareButton2.textContent==='') &&(gameOver === false))
        {
            squareButton2.textContent = currentPlayer;
            moveCount ++;
            checkWinner(currentPlayer);
            checkTie(moveCount);
    switchPlayers(currentPlayer);
    message();
}
})
squareButton3.addEventListener('click',() => {
    if((squareButton3.textContent==='') &&(gameOver === false))
        {
            squareButton3.textContent = currentPlayer;
            moveCount ++;
            checkWinner(currentPlayer);
            checkTie(moveCount);
    switchPlayers(currentPlayer);
    message();
}
})
squareButton4.addEventListener('click',() => {
    if((squareButton4.textContent==='') &&(gameOver === false))
        { 
            squareButton4.textContent = currentPlayer;
            moveCount ++;
            checkWinner(currentPlayer);
            checkTie(moveCount);
    
    switchPlayers(currentPlayer);
    message();
}
})
squareButton5.addEventListener('click',() => {
    if((squareButton5.textContent==='') &&(gameOver === false))
        {
            squareButton5.textContent = currentPlayer;
            moveCount ++;
            checkWinner(currentPlayer);
            checkTie(moveCount);
    switchPlayers(currentPlayer);
    message();
}
})
squareButton6.addEventListener('click',() => {
    if((squareButton6.textContent==='') &&(gameOver === false))
        {
            squareButton6.textContent = currentPlayer;
            moveCount ++;
            checkWinner(currentPlayer);
            checkTie(moveCount);
            switchPlayers(currentPlayer);
    message();
}
})
squareButton7.addEventListener('click',() => {
    if((squareButton7.textContent==='') &&(gameOver === false))
        {
            squareButton7.textContent = currentPlayer;
            moveCount ++;
            checkWinner(currentPlayer);
            checkTie(moveCount);
    switchPlayers(currentPlayer);
    message();
}
})
squareButton8.addEventListener('click',() => {
    if((squareButton8.textContent==='') &&(gameOver === false))
        {
            squareButton8.textContent = currentPlayer;
            moveCount ++;
            checkWinner(currentPlayer);
            checkTie(moveCount);
    switchPlayers(currentPlayer);
    message();
    }
})

resetButton.addEventListener('click',reset);
