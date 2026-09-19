
    // converting the local storage string into object
    let scoreBoard = JSON.parse(localStorage.getItem("scoreBoard")) ||
    {
      Win: 0,
      Lose: 0,
      Tie: 0
    };

    function calculateMoves(playerMove) {

      // computer random move
      const computerInetgerMove = Math.random();

      let computerMove = '';
      let result = '';


      // computer move
      if (computerInetgerMove >= 0 && computerInetgerMove <= 1/3) {
        computerMove = 'Rock';
      }

      else if (computerInetgerMove > 1/3 && computerInetgerMove <= 2/3) {
        computerMove = 'Paper';
      }

      else if ( computerInetgerMove > 2/3 && computerInetgerMove <= 1 ) {
        computerMove = 'Scissor';
      }


      // checking result
      if (playerMove === 'Rock') {

        if (computerMove === 'Rock') {
          result = 'Tie';
          scoreBoard.Tie++;
        }
        else if (computerMove === 'Paper') {
          result = 'Lose';
          scoreBoard.Lose++;
        }
        else if (computerMove === 'Scissor') {
          result = 'Win';
          scoreBoard.Win++;
        }
      }
      else if (playerMove === 'Paper') {
        
        if (computerMove === 'Rock') {
          result = 'Win';
          scoreBoard.Win++;
        }
        else if (computerMove === 'Paper') {
          result = 'Tie';
          scoreBoard.Tie++;
        }
        else if (computerMove === 'Scissor') {
          result = 'Lose';
          scoreBoard.Lose++;
        }
      }


      else if (playerMove === 'Scissor') {
        
        if (computerMove === 'Rock') {
          result = 'Lose';
          scoreBoard.Lose++;
        }
        else if (computerMove === 'Paper') {
          result = 'Win';
          scoreBoard.Win++;
        }
        else if (computerMove === 'Scissor') {
          result = 'Tie';
          scoreBoard.Tie++;
        }
      }


      console.log(
        'Win : ' + scoreBoard.Win +
        ' | Tie : ' + scoreBoard.Tie +
        ' | Lose : ' + scoreBoard.Lose
      );


      // showing score
      const showPara = document.querySelector(".paraScore");

      showPara.innerText =
        `Win : ${scoreBoard.Win} | Lose : ${scoreBoard.Lose} | Tie : ${scoreBoard.Tie}`;


      // showing moves
      const showDecision = document.querySelector(".paraDecision");
      showDecision.innerHTML = `Your move - ${playerMove} | Computer move - ${computerMove}`;


      // showing result
      const showResult = document.querySelector(".result");
      showResult.innerHTML = result;


      // saving score in local storage
      const jsonStringResult = JSON.stringify(scoreBoard);

      localStorage.setItem("scoreBoard",jsonStringResult);

    }


    function resetMoves() {
      localStorage.clear();
      scoreBoard =
      {
        Win: 0,
        Lose: 0,
        Tie: 0
      };

      document.querySelector(".paraScore").innerHTML =
        "Win : 0 | Lose : 0 | Tie : 0";
      document.querySelector(".paraDecision").innerHTML =
        "Make your move!";
      
      document.querySelector(".result").innerHTML = "";
      alert("Reset Successfully!!");
    }
