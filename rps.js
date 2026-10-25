let compScore = 0
let humScore = 0



function playround (Hchoice,Cchoice) {
    Cchoice = getComputerChoice()
	console.log("human: " + Hchoice, "computer: " + Cchoice)
	if (humScore >= 5 || compScore >= 5) {
		return div.textContent = "The game has ended. Press reset to play again"
	}
	if (Hchoice === Cchoice) {
		div.textContent = "its a tie, your score is " + humScore + " ,my score is " + compScore
	} else if (Hchoice === "paper" && Cchoice === "rock") {
		humScore++
		div.textContent = "your score is " + humScore +  " my score is " + compScore + " ,you win the round."
	} else if (Hchoice === "rock" && Cchoice === "scissors") {
		humScore++
		div.textContent = "your score is " + humScore + " my score is " + compScore + " ,you win the round."
	} else if (Hchoice === "scissors" && Cchoice === "paper") {
		humScore++
		div.textContent = "your score is " + humScore + " my score is " + compScore + " ,you win the round."
	} else if (Hchoice === "paper" && Cchoice === "scissors") {
		compScore++
		div.textContent = "your score is " + humScore + " my score is " + compScore + " ,I win the round."
	} else if (Hchoice === "rock" && Cchoice === "paper") {
		compScore++
		div.textContent = "your score is " + humScore + " my score is " + compScore + " ,I win the round."
	} else if (Hchoice === "scissors" && Cchoice === "rock") {
		compScore++
		div.textContent = "your score is " + humScore + " my score is " + compScore + " ,I win the round."
	} 

	if (humScore == 5) {
		winner.textContent = "Damn it, you sneaky humans, I will admit defeat for this once but next time I will defeat you without fail."
	} else if (compScore == 5) {
		winner.textContent = "Haha, I won, You really are just useless loser humans."
	}	
	
}

function getComputerChoice() {
    let compChoice = Math.floor(Math.random()*3)
    if (compChoice == 0) {
        return("rock")
    } else if (compChoice == 1) {
        return("paper")
    } else{
        return("scissors")
    }
}



function reset() {
    compScore = 0
    humScore = 0 
	winner.textContent = ""
	div.textContent = ''
}	

const paperbtn = document.querySelector("#paper")
const rockbtn = document.querySelector("#rock")
const scissorsbtn = document.querySelector("#scissors")

rockbtn.addEventListener("click", () => playround("rock"))
paperbtn.addEventListener("click", () => playround("paper"))
scissorsbtn.addEventListener("click", () => playround("scissors"))

const div = document.querySelector("#result")
const winner = document.querySelector("#winner")

const rebtn = document.querySelector("#reset")
rebtn.addEventListener("click", reset)



 







