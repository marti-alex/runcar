class Gama {
    constructor(){

    }

    gatestate() {
        var control = database.ref("gamestate");

        control.on ("value", function (data) {
            gamestate = data.val()
        })
    }


    scribgame(e){
        database.ref("/").update({gamestate: e })



    }

    start(){
        if(gamestate === 0  ){
            character = new Jugador ();
            character.conteo()
            note = new Lista();
            note.display()
            
        }



    }








}



