const onturn=new Audio('click.mp3')
const gameover=new Audio('Game_over.mpeg')
let turn = "X";
let isgameover=false;
// function to check turn
const changeTurn=()=>{
    return turn==="X"?"0":"X"
}
// check for win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText= `${boxtext[e[0]].innerText} won`
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
            gameover.play();
        }
    })
}
// game's logic
let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn=changeTurn();
            onturn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for"+ turn;
            }
        }
    })
})
btn.addEventListener('click', ()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
element.innerText=""
    });
    turn="X";
    isgameover=false;
    if(!isgameover){
        document.getElementsByClassName("info")[0].innerText="Turn for"+ turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width=0;
    }
})