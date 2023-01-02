const rockElement = document.getElementById('rock')
const paperElement = document.getElementById('paper')
const scissorsElement = document.getElementById('scissors')

const playerScoreElement = document.getElementById('playerScore')
const computerScoreElement = document.getElementById('computerScore')

const resultElement = document.getElementsByClassName('displayResult')[0]
const playerChoiceElement = document.getElementById('playerChoice')
const computerChoiceElement = document.getElementById('computerChoice')

let playerScore = 0
let computerScore = 0

rockElement.addEventListener('click', () => {
	game('Rock')
})

paperElement.addEventListener('click', () => {
	game('Paper')
})
scissorsElement.addEventListener('click', () => {
	game('Scissors')
})

function getComputerChoice() {
	const options = ['Rock', 'Paper', 'Scissors']
	return options[Math.floor(Math.random() * 3)]
}

function playRound(player, computer) {
	const playerChoice =
		player.charAt(0).toUpperCase() + player.slice(1).toLowerCase()

	if (playerChoice === computer) return 'Its a draw'
	else if (
		(playerChoice === 'Rock' && computer === 'Scissors') ||
		(playerChoice === 'Paper' && computer === 'Rock') ||
		(playerChoice === 'Scissors' && computer === 'Paper')
	)
		return `You Won! ${playerChoice} beats ${computer}`
	else return `You Lose! ${computer} beats ${playerChoice} `
}

function game(playerChoice) {
	const computerChoice = getComputerChoice()
	const round = playRound(playerChoice, computerChoice)
	resultElement.textContent = round
	playerChoiceElement.setAttribute('src', `./images/${playerChoice}.svg`)
	computerChoiceElement.setAttribute('src', `./images/${computerChoice}.svg`)
	console.log(computerChoiceElement)
	if (round.includes('Won!')) {
		playerScore++
		resultElement.classList.remove('lose')
		resultElement.classList.add('won')
	} else if (round.includes('Lose!')) {
		computerScore++
		resultElement.classList.remove('won')
		resultElement.classList.add('lose')
	} else {
		resultElement.classList.remove('won')
		resultElement.classList.remove('lose')
	}
	playerScoreElement.textContent = `Player: ${playerScore}`
	computerScoreElement.textContent = `Computer: ${computerScore}`
	setTimeout(() => {
		checkWinner()
	}, 200)
}

function checkWinner() {
	if (playerScore === 5) {
		alert('Congratulations! you beat the machine!!!')
		cleanBoard()
	} else if (computerScore === 5) {
		alert(" I'm sorry! you lost to the machine!!!")
		cleanBoard()
	}
}

function cleanBoard() {
	if (resultElement.classList.contains('won'))
		resultElement.classList.remove('won')
	if (resultElement.classList.contains('lose'))
		resultElement.classList.remove('lose')
	resultElement.textContent = ''
	playerScore = 0
	computerScore = 0
	playerScoreElement.textContent = `Player: ${playerScore}`
	computerScoreElement.textContent = `Computer: ${computerScore}`
	playerChoiceElement.setAttribute('src', `./images/question-mark.svg`)
	computerChoiceElement.setAttribute('src', `./images/question-mark.svg`)
}
