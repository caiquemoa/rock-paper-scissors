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
		return `You Won ${player} beats ${computer}`
	else return `You Lose! ${computer} beats ${player} `
}
