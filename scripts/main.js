let createModal = (text) => {
	modal.innerHTML = text
}

let singlePlayerGameMode = () => {
	createModal(`
	<button class='backBtn'>&larr; Back to Game mode selection</button>
	<h3>Game Mode: Single Player</h3><br>
	<form>
	
		<label>
			<input type='text' id='playerName' placeholder='Player name...' autofocus>
		</label>
		
		<label>
			<span>Select player color:</span>
			<input type='color' id='playerColor'>
		</label>
		
		<label>
			<span>Select game piece:</span>
			
			<div id='gamepiece-wrap'>
				<label>
					<input type='radio' id='cross' value='cross' name='gamepiece'>
					<span>o</span>
				</label>
				
				<label>
					<input type='radio' id='knot' value='knot' name='gamepiece'>
					<span>×</span>
				</label>
			</div>
		</label>
	</form>
	`)
}