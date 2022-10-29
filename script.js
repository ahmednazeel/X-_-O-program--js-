let title = document.querySelector(".title")
let turn = "x";
let squares = [];
function easeWinner(num1,num2,num3){
    title.innerHTML =`${squares[num1]} winner`
    document.getElementById("item" +num1).style.backgroundColor = `#333`;
    document.getElementById("item" +num2).style.backgroundColor = `#333`;
    document.getElementById("item" +num3).style.backgroundColor = `#333`;
    setInterval(function (){title.innerHTML +='.'},500)
    setTimeout(function(){location.reload()},1500)
}
function winner(){
    for(let i = 1; i < 10; i++){
        squares[i]=document.getElementById("item" + i).innerHTML;
    }
    if(squares[1] === squares[2] && squares[2] === squares[3] && squares[1]!==""){
        easeWinner(1,2,3);
    }else if(squares[4] === squares[5] && squares[5] === squares[6] && squares[5]!==""){
        easeWinner(4,5,6);
    }else if(squares[7] === squares[8] && squares[8] === squares[9] && squares[7]!==""){
        easeWinner(7,8,9);
    }else if(squares[1] === squares[4] && squares[4] === squares[7] && squares[4]!==""){
        easeWinner(1,4,7);
    }else if(squares[2] === squares[5] && squares[5] === squares[8] && squares[5]!==""){
        easeWinner(2,5,8);
    }else if(squares[3] === squares[6] && squares[6] === squares[9] && squares[6]!==""){
        easeWinner(3,6,9);
    }else if(squares[1] === squares[5] && squares[5] === squares[9] && squares[9]!==""){
        easeWinner(1,5,9);
    }else if(squares[3] === squares[5] && squares[5] === squares[7] && squares[7]!==""){
        easeWinner(3,5,7);
    }
}
function game(id){
    let element = document.getElementById(id)
    if(turn === 'x' && element.innerHTML ===""){
        element.innerHTML = "x";
        turn = 'o';
        title.innerHTML = "o"
    }else if(turn === 'o' && element.innerHTML ===""){
        element.innerHTML = "o";
        turn = 'x';
        title.innerHTML = "x"
    }
    winner();
}