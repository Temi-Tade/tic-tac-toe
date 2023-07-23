const gameModeScreen = `
	<!--font awesome for player icon-->
	<h3>Select Game Mode</h3>
	<ul type="none" id="gamemode_wrap">
		<li>
			<button onclick="singlePlayerGameMode()">One Player</button>
		</li>
					
		<li>
			<button onclick="multiPlayerGameMode()">Two Players</button>
		</li>
	</ul>
`

const singlePlayerScreen = `
	<button class='backBtn' onclick='createModal(gameModeScreen)'>&larr; Back to Game mode selection</button>
	<h3>Game Mode: One Player</h3><br>
	<form id='player_details'>
		<div class='field'>
			<label>
			<input type='text' id='playerName' placeholder='Player name...' autofocus>
			</label>
		</div>
		
		<div id='btn_container'>
			<button type='submit'>continue</button>
		</div>
	</form>
`

const multiPlayerScreen = `
	<button class='backBtn' onclick='createModal(gameModeScreen)'>&larr; Back to Game mode selection</button>
	<h3>Game Mode: Two Players</h3><br>
	<form id='player_details'>
		<div class='field'>
			<label>
				<input type='text' id='player1Name' placeholder='Player 1 Name...' autofocus>
			</label>
		</div>
		
		<div class='field'>
			<label>
				<input type='text' id='player2Name' placeholder='Player 2 Name...'>
			</label>
		</div>
		
		<div id='btn_container'>
			<button>continue</button>
		</div>
	</form>
`

let createModal = (text) => {
	modal.innerHTML = text
}

let singlePlayerGameMode = () => {
	createModal(singlePlayerScreen)
	let form = document.querySelector('#player_details')
	form.onsubmit = (e) => {
		e.preventDefault()
		let player = new Player(document.querySelector('#playerName').value, 'x', 0, true)
		let cpu = new Player('cpu', 'o', 0, false)
		createGame()
	}
}

let multiPlayerGameMode = () => {
	createModal(multiPlayerScreen)
}

const createGame = (p1_name, p2_name) => {
	const createGameScreen = `
		<div id='gamescreen_wrap'>
			<div id='p1'>${p1_name}</div>
			<div>vs</div>
			<div id='p2'>${p2_name}</div>
		</div>
		<button id='startGameBtn'>start game</button>
	`
	createModal(createGameScreen)
}