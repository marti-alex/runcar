class Lista {
    constructor(){
        this.title = createElement("h2")
        this.box = createInput("name")
        this.bom = createButton("push")
        this.name = ""
        this.text = createElemet("h4")
    }

    display(){

        this.title.html("runcar")
        this.title.position(250, 50)
        this.box.position(150,150)
        this.bom.position(350,200)

        this.bom.mousePressed(function(){
            this.box.hide()
            this.bom.hide()
            this.name = this.box.value()
            playerplus ++ 
            this.text.html("WELCOME " + this.name)
            this.text.position(250,250)
            
            character.nameplayers(this.name)
            character.fourplayers(playerplus)

        })



    }


}

    

