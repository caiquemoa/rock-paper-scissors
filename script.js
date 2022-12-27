function getComputerChoice() {
	const options = ['Rock', 'Paper', 'Scissors']
	return options[Math.floor(Math.random() * 3)]
}

function playRound(p, computer) {
	const player = p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()

	if (player === computer) return 'Its a draw'
	else if (
		(player === 'Rock' && computer === 'Scissors') ||
		(player === 'Paper' && computer === 'Rock') ||
		(player === 'Scissors' && computer === 'Paper')
	)
		return `You Won! ${player} beats ${computer}`
	else return `You Lose! ${computer} beats ${player} `
}

function game() {
	let computerScore = 0
	let playerScore = 0
	for (let i = 0; i < 5; i++) {
		const computerChoice = getComputerChoice()
		const playerChoice = prompt('Your Choice')
		const round = playRound(playerChoice, computerChoice)
		console.log(round)
		if (round.includes('Won')) playerScore++
		else if (round.includes('Lose')) computerScore++
		console.log(`Player score: ${playerScore} Computer score: ${computerScore}`)
	}
}
game()
