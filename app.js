const gameBoard= document.querySelector("#gameboard");
const infoDisplay= document.querySelector("#info");
const startCells=["","","","","","","","",""];

let go ='circle';
infoDisplay.textContent="Circle Goes First"

function createBoard(){
    startCells.forEach((_cell,index)=>{
        const cellElement= document.createElement("div")
        cellElement.classList.add("square")
        cellElement.id=index;
        cellElement.addEventListener("click", addGo)
        gameBoard.append(cellElement)
    })
}
createBoard();

function addGo(e){
    const goDisplay=document.createElement("div")
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go=go==="circle" ? "cross" : "circle"
    if(go=="circle"){
        gameBoard.style.boxShadow ="0px 8px 100px rgb(0, 60, 255)";
        
    }else{
        gameBoard.style.boxShadow ="0px 8px 100px rgb(250,0,0)";
        
    }  

    infoDisplay.textContent="It is now " + go + "'s go."
    e.target.removeEventListener ("click",addGo)
    checkScore();
}

function checkScore(){
   const allSquares=document.querySelectorAll(".square");
   const winningCombos=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
   ] 
  let winner ="FARZI PLAYERS";
// if circle wins   
   winningCombos.forEach(array=> {
    let circleWins= array.every(cell=> 
        allSquares[cell].firstChild?.classList.contains("circle"))

        if(circleWins){
            winner="Circle Wins !"
            infoDisplay.textContent=winner;
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        } 
   })
// if cross wins
   winningCombos.forEach(array=> {
    let crossWins= array.every(cell=> 
        allSquares[cell].firstChild?.classList.contains("cross"))

        if(crossWins){
            winner="Cross Wins !"
            infoDisplay.textContent=winner;
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }  
   })
  
}
