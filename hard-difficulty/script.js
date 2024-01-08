// STEP 1: Create Number and Display Number
// STEP 2: Align Random Number and Clicked Number
// STEP 3: Create 5 chances to guess number
// STEP 4: Display Game Over and Retry 


const guessNum = [];
let chance = 5;

for(let i = 1; i <= 50; i++){
    guessNum.push(i);
}

const randNum = Math.floor(Math.random() * guessNum.length) + 1;

window.addEventListener('load', () => {

    // Displays buttons with their id
    function displayNum(){
        let content = document.querySelector(".content");

        content.innerHTML = '';

        guessNum.forEach(guessNum => {
            const numBtn = document.createElement('button');
            numBtn.textContent = `${guessNum}`;
            numBtn.id = `number${guessNum}`;
            content.appendChild(numBtn);

            numBtn.addEventListener("click", () => userAnswer(numBtn));
        });

        
        console.log(`The Correct Answer: ${randNum}`)

      
    };
    
    displayNum();


    // Interactive buttons
    let currentGame = true;
    const update = document.querySelector(".update");
    const life = document.querySelector(".life");
    life.innerHTML = `Chances: ${chance}`;

    const back = document.createElement("a");
    const retry = document.createElement("a");
    back.innerHTML = "Main Menu";
    retry.innerHTML = "Retry";
    back.setAttribute("href", "../index.html");
    retry.setAttribute("href", "index.html");

    function userAnswer(answerBtn){
        const userAnswer = parseInt(answerBtn.textContent);
    
        showAnswer(answerBtn);
        result(userAnswer);
    }

    const showAnswer = (answerBtn) => {
        if(currentGame === true){
            answerBtn.style.backgroundColor = "grey"; 
            
        }
    }


    function result(userAnswer){
        if (userAnswer > randNum && chance > 1){
            if(currentGame === true){
                chance--;
                update.innerHTML = "Answer is Too High";
                life.innerHTML = `Chances: ${chance}`;
            }
        } 
        else if (userAnswer < randNum && chance > 1){
            if(currentGame === true){
                chance--;
                update.innerHTML = "Answer is Too Low"
                life.innerHTML = `Chances: ${chance}`;
            }
        } 
        else if (userAnswer === randNum && chance >= 1){
            if(currentGame === true){
                update.innerHTML = "You Win!!";
                document.querySelector(".feedback").appendChild(back);
                document.querySelector(".feedback").appendChild(retry);
                currentGame = false;
            }
            
        } 
        else{
            if(chance === 1){
                update.innerHTML = `Game Over!! The Correct Answer is ${randNum}`;
                life.innerHTML = "Chances: 0";
                document.querySelector(".feedback").appendChild(back);
                document.querySelector(".feedback").appendChild(retry);
                currentGame = false;
            }
        }
    }

})







