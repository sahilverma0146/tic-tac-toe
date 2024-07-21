let boxes = document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset-btn");
let newGameBtn = document.querySelector(".new-btn");



let turnO =true; // playerX , playerO;
//  2d array
// let arr2 = [ [2,3,4] , [3,4,5] , [4,5,6], [5,6,7] ] ;
// console.log(arr2);
// console.log(arr2[0]);
// console.log(arr2[0][2]);


let winPatterns = [ [0,1,2] , [0,3,6] , [0,4,8], [1,4,7] , [2,5,8] , [2,4,6] , [3,4,5] , [6,7,8 ] ] ;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked  ");
        if(turnO){
            box.innerText="O"
            turnO=false;
        }else{
            
            box.innerText="X";
            turnO=true;
            
        }
        box.disabled=true;
        checkWinner();
    });

});


const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}




const checkWinner =()=>{
    for( let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        // console.log( boxes[pattern[0]].innerText,  boxes[pattern[1]].innerText ,  boxes[pattern[2]].innerText );

        if(pos1Val != "" && pos2Val !="" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner" , pos1Val);
                // console.log("winner" , pos2Val);
                // console.log("winner" , pos3Val);
                disableBoxes(); 
                // disable all btn when the first winner is found
               
               
            }
        }
    }
}; 

const enableboxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}


const resetGame = () => {
    turnO = true;
    count = 0;
    enableboxes();
    
  };

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
