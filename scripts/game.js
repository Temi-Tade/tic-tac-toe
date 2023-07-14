//variables
const board = document.querySelector('#board')
const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")
const modal = document.querySelector('#modal')

function Game(mode){
	this.mode = mode
}

class Player {
	constructor(name, piece, won) {
		this.name = name
		this.piece = piece
		this.won = won
		this.color = color
	}
}