var GameOver = {
    create: function () {
        console.log("Game Over");
        var button = this.game.add.button(300, 300, 
                                          'button', 
                                          this.actionOnClick, 
                                          this, 2, 1, 0);
        button.anchor.set(0.5);
        var goText = this.game.add.text(400, 100, "GameOver");
        var text = this.game.add.text(0, 0, "Reset Game");
        text.anchor.set(0.5);
        goText.anchor.set(0.5);
        button.addChild(text);
        
        //TODO 8 crear un boton con el texto 'Return Main Menu' que nos devuelva al menu del juego.

        var button2 = this.game.add.button(500, 300, 
                                          'button', 
                                          this.returnMainMenu, 
                                          this, 2, 1, 0);
        button2.anchor.set(0.5);
        var text2 = this.game.add.text(0, 0, "Return menu");
        text2.anchor.set(0.5);
        button2.addChild(text2);
    },
    

    //TODO 7 declarar el callback del boton.
    actionOnClick: function()
    {
        this.game.state.start('play');

    },

    returnMainMenu: function()
    {
        this.game.state.start('boot');
    }

};

module.exports = GameOver;