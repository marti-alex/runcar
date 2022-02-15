class Jugador {
    constructor(){

    }

    conteo (){
        var playerplusref = database.ref("playerplus")
        playerplusref.on("value",function (data){
            playerplus = data.val()
        })
        
    }

    fourplayers (c){
        database.ref ("/").update({playerplus: c})
        
    }

    nameplayers (nombre){
        var indicejugador = "player" + playerplus
        database.ref(indicejugador).set ({name: nombre})
        
    }




}