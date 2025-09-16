document.addEventListener('DOMContentLoaded', () => {
    const mainLobby = document.getElementById('main-lobby');
    const gameLobby = document.getElementById('game-lobby');

    const startButton = document.getElementById('startButton');
    const backButton = document.getElementById('backButton');
    
    const playerNameInput = document.getElementById('playerNameInput');
    const playerNameDisplay = document.getElementById('playerNameDisplay');

    let currentPlayerName = "Player 1";

    // Fungsi untuk beralih antar lobby
    function switchLobby(hideLobby, showLobby) {
        hideLobby.classList.remove('active');
        showLobby.classList.add('active');
    }

    // Event listener untuk tombol MULAI
    startButton.addEventListener('click', () => {
        const name = playerNameInput.value.trim();
        if (name) {
            currentPlayerName = name;
        }
        playerNameDisplay.textContent = currentPlayerName;
        switchLobby(mainLobby, gameLobby);
    });

    // Event listener untuk tombol KEMBALI
    backButton.addEventListener('click', () => {
        switchLobby(gameLobby, mainLobby);
    });
});