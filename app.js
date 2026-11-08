/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let currentPlayer = 'X';
let isGameOver = false;



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
        if(currentPlayer==='X')
            currentPlayer='O';
        else
            currentPlayer='X';
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
        if(currentPlayer==='X')
            currentPlayer='O';
        else
            currentPlayer='X';
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
        if(currentPlayer==='X')
            currentPlayer='O';
        else
            currentPlayer='X';
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
        if(currentPlayer==='X')
            currentPlayer='O';
        else
            currentPlayer='X';
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
        if(currentPlayer==='X')
            currentPlayer='O';
        else
            currentPlayer='X';
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
        if(currentPlayer==='X')
            currentPlayer='O';
        else
            currentPlayer='X';
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
        if(currentPlayer==='X')
            currentPlayer='O';
        else
            currentPlayer='X';
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
        if(currentPlayer==='X')
            currentPlayer='O';
        else
            currentPlayer='X';
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
        if(currentPlayer==='X')
            currentPlayer='O';
        else
            currentPlayer='X';
    }
})