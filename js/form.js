class Form{
    constructor(){
        
        this.title = createElement("h2")
        this.input = createInput("name")
        this.button = createButton("play")
        this.greeting = createElement("h3")
    }
hideForm()
{
    this.input.hide()
    this.title.hide()
    this.button.hide()
    this.greeting.hide()
    
}
    display(){
         console.log("inside display")
       
        this.title.position(230,100)
        this.title.html("car racing game")
        
         this.input.position(230,160)

         this.button.position(250,200)

         this.button.mousePressed(()=>{
             this.input.hide()
             this.button.hide()

             var name = this.input.value();

             this.greeting.html("hello " + name);
             this.greeting.position(130,160)

             player.name= name;
             playerCount= playerCount + 1
             
             player.index=playerCount;

            
             player.updateCount(playerCount)
             player.update()
             
         })


    }
}