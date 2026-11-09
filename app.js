/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let currentPlayer = 'X';
let isGameOver = false;
let moveCount = 0 ;



/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector('#message');
const SquareEl0 = document.getElementById('0');
const SquareEl1 = document.getElementById('1');
const SquareEl2 = document.getElementById('2');
const SquareEl3 = document.getElementById('3');
const SquareEl4 = document.getElementById('4');
const SquareEl5 = document.getElementById('5');
const SquareEl6 = document.getElementById('6');
const SquareEl7 = document.getElementById('7');
const SquareEl8 = document.getElementById('8');

const resetButton = document.getElementById('class');



/*-------------------------------- Functions --------------------------------*/
messageEl.textContent = `It is ${currentPlayer}'s turn`;

    


/*----------------------------- Event Listeners -----------------------------*/
SquareEl0.addEventListener('click',() => {
    
     if((SquareEl0.textContent!=='')||(isGameOver=== true))
     {
        return
     }
    else
    {
        SquareEl0.textContent= currentPlayer;
        moveCount ++;
        if (
  (SquareEl0.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
  (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
  (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (SquareEl0.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
  (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (SquareEl0.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
) {
  message.textContent = `${currentPlayer} wins!`;
  isGameOver = true;
  return;
}
if ((moveCount===9)&& (isGameOver===false))
     {
        messageEl.textContent=`It's a tie!`;
        return;

    }
        if(currentPlayer==='X')
            currentPlayer='O';
        else
            currentPlayer='X';
    messageEl.textContent = `It is ${currentPlayer}'s turn`;
    }

})
SquareEl1.addEventListener('click',() => {
    
     if((SquareEl1.textContent!=='')||(isGameOver=== true))
     {
        return
     }
    else
    {
        SquareEl1.textContent= currentPlayer;
        moveCount ++;
        if (
  (SquareEl0.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
  (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
  (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (SquareEl0.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
  (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (SquareEl0.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
) {
  message.textContent = `${currentPlayer} wins!`;
  isGameOver = true;
  return;
}
        if(currentPlayer==='X')
            currentPlayer='O';
        else
            currentPlayer='X';
    messageEl.textContent = `It is ${currentPlayer}'s turn`;
    }
})
SquareEl2.addEventListener('click',() => {
    
     if((SquareEl2.textContent!=='')||(isGameOver=== true))
     {
        return
     }
    else
    {
        SquareEl2.textContent= currentPlayer;
        moveCount ++;
        if (
  (SquareEl0.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
  (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
  (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (SquareEl0.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
  (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (SquareEl0.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
) {
  message.textContent = `${currentPlayer} wins!`;
  isGameOver = true;
  return;
}
        if(currentPlayer==='X')
            currentPlayer='O';
        else
            currentPlayer='X';
    messageEl.textContent = `It is ${currentPlayer}'s turn`;
    }
})
SquareEl3.addEventListener('click',() => {
    
     if((SquareEl3.textContent!=='')||(isGameOver=== true))
     {
        return
     }
    else
    {
        SquareEl3.textContent= currentPlayer;
        moveCount ++;
        if (
  (SquareEl0.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
  (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
  (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (SquareEl0.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
  (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (SquareEl0.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
) {
  message.textContent = `${currentPlayer} wins!`;
  isGameOver = true;
  return;
}
        if(currentPlayer==='X')
            currentPlayer='O';
        else
            currentPlayer='X';
    messageEl.textContent = `It is ${currentPlayer}'s turn`;
    }
})
SquareEl4.addEventListener('click',() => {
    
     if((SquareEl4.textContent!=='')||(isGameOver=== true))
     {
        return
     }
    else
    {
        SquareEl4.textContent= currentPlayer;
        moveCount ++;
        if (
  (SquareEl0.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
  (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
  (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (SquareEl0.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
  (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (SquareEl0.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
) {
  message.textContent = `${currentPlayer} wins!`;
  isGameOver = true;
  return;
}
        if(currentPlayer==='X')
            currentPlayer='O';
        else
            currentPlayer='X';
    messageEl.textContent = `It is ${currentPlayer}'s turn`;
    }
})
SquareEl5.addEventListener('click',() => {
    
     if((SquareEl5.textContent!=='')||(isGameOver=== true))
     {
        return
     }
    else
    {
        SquareEl5.textContent= currentPlayer;
        moveCount ++;
        if (
  (SquareEl0.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
  (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
  (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (SquareEl0.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
  (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (SquareEl0.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
) {
  message.textContent = `${currentPlayer} wins!`;
  isGameOver = true;
  return;
}
        if(currentPlayer==='X')
            currentPlayer='O';
        else
            currentPlayer='X';
    messageEl.textContent = `It is ${currentPlayer}'s turn`;
    }
})
SquareEl6.addEventListener('click',() => {
    
     if((SquareEl6.textContent!=='')||(isGameOver=== true))
     {
        return
     }
    else
    {
        SquareEl6.textContent= currentPlayer;
        moveCount ++;
        if (
  (SquareEl0.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
  (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
  (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (SquareEl0.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
  (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (SquareEl0.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
) {
  message.textContent = `${currentPlayer} wins!`;
  isGameOver = true;
  return;
}
        if(currentPlayer==='X')
            currentPlayer='O';
        else
            currentPlayer='X';
    messageEl.textContent = `It is ${currentPlayer}'s turn`;
    }
})
SquareEl7.addEventListener('click',() => {
    
     if((SquareEl7.textContent!=='')||(isGameOver=== true))
     {
        return
     }
    else
    {
        SquareEl7.textContent= currentPlayer;
        moveCount ++;
        if (
  (SquareEl0.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
  (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
  (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (SquareEl0.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
  (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (SquareEl0.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
) {
  message.textContent = `${currentPlayer} wins!`;
  isGameOver = true;
  return;
}
        if(currentPlayer==='X')
            currentPlayer='O';
        else
            currentPlayer='X';
    messageEl.textContent = `It is ${currentPlayer}'s turn`;
    }
})
SquareEl8.addEventListener('click',() => {
    
     if((SquareEl8.textContent!=='')||(isGameOver=== true))
     {
        return
     }
    else
    {
        SquareEl8.textContent= currentPlayer;
        moveCount ++;
        if (
  (SquareEl0.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
  (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
  (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (SquareEl0.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
  (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (SquareEl0.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
  (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
) {
  message.textContent = `${currentPlayer} wins!`;
  isGameOver = true;
  return;
}
        if(currentPlayer==='X')
            currentPlayer='O';
        else
            currentPlayer='X';
    messageEl.textContent = `It is ${currentPlayer}'s turn`;
    }
})
resetButton.addEventListener('click', () => {
    currentPlayer = 'X';
    moveCount = 0;
    SquareEl0.textContent = '';
    SquareEl1.textContent = '';
    SquareEl2.textContent = '';
    SquareEl3.textContent = '';
    SquareEl4.textContent = '';
    SquareEl5.textContent = '';
    SquareEl6.textContent = '';
    SquareEl7.textContent = '';
    SquareEl8.textContent = '';
    messageEl.textContent = `It is X's turn`;
    isGameOver = false;
})