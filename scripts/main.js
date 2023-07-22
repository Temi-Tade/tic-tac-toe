let form = document.querySelector('#player_details')

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
}

let multiPlayerGameMode = () => {
	createModal(multiPlayerScreen)
}


uri