class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton("play");
this.title=createElement("h2")
    }
display(){
    this.title.html("Let's Fight!");
    this.title.position(100,50);
    this.input.position(200,200);
    this.button.position(300,300);
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        this.title.hide();
        playerCount=playerCount+1;
        var greeting=createElement("h2");
        greeting.html("Hello "+this.input.value());
        greeting.position(200,300);
        gameState=1;
    })
}
}