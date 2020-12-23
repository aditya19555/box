class Ground {
    constructor(x,y,width,height){
        //properties of body
    var options = {
       isStatic: true, 
        friction : 0.3,
        density : 1.0

}
this.ground=Bodies.rectangle(x,y,width,height,options)
this.w = width;
this.h = height;
World.add(world,this.ground)
}
display(){
var pos=this.ground.position
rectMode(CENTER)
rect(pos.x,pos.y,this.w,this.h)

}
}