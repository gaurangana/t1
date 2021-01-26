class Block{
    constructor(x,y,width,height ){
        
        var option = {

            friction:0.0,
            restitution: 0.4
        }

    //     this.body= Bodies.rectangle(x,y,width,height,option)
    //     this.width= width ;
    //     this.height = height ;
    //    World.add(world, this.body) ;

       this.body= Bodies.rectangle(x,y,width,height,option) ;
       this.width = width ;
       this.height= height ;
       World.add(world,this.body)
       console.log(this.body)

    }
    display(){
        var angle = this.body.angle ;
        var p = this.body.position ;

        push()
        translate(p.x , p.y) ;
        rotate(angle) ;
        rectMode(CENTER) ;
        rect(0,0,this.width,this.height)
         pop()
    }
}