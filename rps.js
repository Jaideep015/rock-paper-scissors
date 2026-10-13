function getComputerChoice() {
    let compChoice = Math.floor(Math.random()*3)
    if (compChoice == 0) {
        return("rock")
    } else if (compChoice == 1) {
        return("paper")
    } else{
        return("scissor")
    }
}
function getHumanChoice() {
    let  humChoice = prompt("enter your choice")
    if (!(humChoice === "scissor" || humChoice === "rock" || humChoice === "paper")) {
        alert("enter an valid choice")
    }
    return humChoice.toLowerCase()
}

let compScore = 0
let humScore = 0

function playgame() {
    for (let i = 1; i < 6; i++) {
        console.log(`welcome, round ${i}`)
        playround()
    }

    if (humScore > compScore) {
        console.log("dammit how can i lose to such lowlife.Damn you lucky humans")
    } else if (humScore < compScore) {
        console.log("haha I win.You really are just dumb worthless lowlife humans")
    } else if (humScore === compScore) {
        console.log("Never thought there would be a human who could stand up to me.Not bad a lowlife")
    }
    reset() 
}

function playround (Cchoice,Hchoice) {
    Hchoice = getComputerChoice()
    Cchoice = getHumanChoice()
    if (Hchoice === Cchoice) {
        console.log("its a tie")
    } else if (Hchoice === "paper" && Cchoice === "rock") {
        humScore++
        console.log("your score is " + humScore + " my score is " + compScore + " ,you win the round.")
    } else if (Hchoice === "rock" && Cchoice === "scissor") {
        humScore++
        console.log("your score is " + humScore + " my score is " + compScore + " ,you win the round.")
    } else if (Hchoice === "scissor" && Cchoice === "paper") {
        humScore++
        console.log("your score is " + humScore + " my score is " + compScore + " ,you win the round.")
    } else if (Hchoice === "paper" && Cchoice === " scissor") {
        compScore++
        console.log("your score is " + humScore + " my score is " + compScore + " ,I win the round.")
    } else if (Hchoice === "rock" && Cchoice === "paper") {
        compScore++
        console.log("your score is " + humScore + " my score is " + compScore + " ,I win the round.") 
    } else if (Hchoice === "scissor" && Cchoice === "rock") {
        compScore++
        console.log("your score is " + humScore + " my score is " + compScore + " ,I win the round.")
    } 
}

function reset() {
    compScore = 0
    humScore = 0 
}
playgame()





