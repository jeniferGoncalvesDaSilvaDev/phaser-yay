import Phaser from 'phaser'; 
// If using CommonJS modules
window.onload = function() {
    // Your Phaser code here
      //criando um objeto para carregar as configuraçoes do jogo
      const config = {
        type: Phaser.Canvas,
        width: 800,
        height: 600,
        backgroundColor: '#0000',
        //pasando as fases do jogo
        //scene:[scene01]
        
        
    };
    //chamando o objeto para carregar as configuraçoes do jogo
    let game = new Phaser.Game(config);
     
}


// Create a new game instance, and inject it into the DOM:
