//converting the ls stringed value to object using json
  let scoreBoard=JSON.parse(localStorage.getItem("scoreBoard")) ||
  {
    Win:0,
    Lose:0,
    Tie:0
  };
  
  // buttons functionality
  function calculateMoves(playerMove){

    // computer random move in integer
    const computerInetgerMove=Math.random();
    
    // computer move for String(rock,paper,scissor)
    let computerMove='';
    let result='';
    

    // player choose rock
    if(playerMove === 'Rock'){
      console.log('Picked Rock');


      // Checking Random Integer and Assigning Rock, Paper and Scissors
      if(computerInetgerMove >= 0 && computerInetgerMove <= 1/3){
        computerMove='Rock';
        console.log('Computer move - '+computerMove);
      }else if(computerInetgerMove > 1/3 && computerInetgerMove <= 2/3){
        computerMove='Paper';
        console.log('Computer move - '+computerMove);
      }else if(computerInetgerMove > 2/3 && computerInetgerMove <= 1){
        computerMove='Scissor';
        console.log('Computer move - '+computerMove);
      }
            
      // Assigning Result- win, tie or lose
      if(computerMove === 'Rock'){
        result='Tie';
        scoreBoard.Tie=scoreBoard.Tie+1;
      }else if(computerMove === 'Paper'){
        result='Lose';
        scoreBoard.Lose=scoreBoard.Lose+1;
      }else if(computerMove === 'Scissor'){
        result='Win';
        scoreBoard.Win=scoreBoard.Win+1;
      }


    }
  
  // player choose paper
  else if(playerMove === 'Paper'){
    
    
    // Checking Random Integer and Assigning Rock, Paper and Scissors
    if(computerInetgerMove >= 0 && computerInetgerMove <= 1/3){
      computerMove='Rock';
      console.log('Computer move - '+computerMove);
    }else if(computerInetgerMove > 1/3 && computerInetgerMove <= 2/3){
      computerMove='Paper';
      console.log('Computer move - '+computerMove);
    }else if(computerInetgerMove > 2/3 && computerInetgerMove <= 1){
      computerMove='Scissor';
      console.log('Computer move - '+computerMove);
    }
    
    // Assigning Result- win, tie or lose
    if(computerMove === 'Rock'){
      result='Win';
      scoreBoard.Win++;
    }else if(computerMove === 'Paper'){
      result='Tie';
      scoreBoard.Tie++;
    }else if(computerMove === 'Scissor'){
      result='Lose';
      scoreBoard.Lose++;
    }


}
  
  // player choose scissor
  else if(playerMove === 'Scissor'){
    console.log('Picked Scissor');
    
    
    // Checking Random Integer and Assigning Rock, Paper and Scissors
    if(computerInetgerMove >= 0 && computerInetgerMove <= 1/3){
      computerMove='Rock';
      console.log('Computer move - '+computerMove);
    }else if(computerInetgerMove > 1/3 && computerInetgerMove <= 2/3){
      computerMove='Paper';
      console.log('Computer move - '+computerMove);
    }else if(computerInetgerMove > 2/3 && computerInetgerMove <= 1){
      computerMove='Scissor';
      console.log('Computer move - '+computerMove);
    }

    // Assigning Result- win, tie or lose
    if(computerMove === 'Rock'){
      result='Lose';
      scoreBoard.Lose++;
    }else if(computerMove === 'Paper'){
      result='Win';
      scoreBoard.Win++;
    }else if(computerMove === 'Scissor'){
      result='Tie';
      scoreBoard.Tie++;
    }  

  }    

  
  console.log('Win : '+scoreBoard.Win+" | Tie : "+scoreBoard.Tie+" | Lose : "+scoreBoard.Lose);
  
  // setting para
  const showPara=document.querySelector(".paraScore");
  showPara.innerText=`Win : ${scoreBoard.Win} | Lose : ${scoreBoard.Lose} | Tie : ${scoreBoard.Tie}`;

  const showDecision=document.querySelector(".paraDecision");

  showDecision.innerHTML=`Your move - ${playerMove} | Computer move - ${computerMove}`;

  const showResult=document.querySelector(".result");
  showResult.innerHTML=`${result}`;


  const jsonStringResult=JSON.stringify(scoreBoard);
  localStorage.setItem("scoreBoard",jsonStringResult);
  
}

function resetMoves(){
  localStorage.clear();
  
  scoreBoard=
  {
    Win:0,
    Lose:0,
    Tie:0
  };

  document.querySelector(".paraScore").innerHTML="";
  document.querySelector(".paraDecision").innerHTML="";
  document.querySelector(".result").innerHTML="";
  
  alert("reset successfully..");
}
