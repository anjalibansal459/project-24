class Sand{
    constructor(x,y,radius){
        var options={
            'restitution':0.5,
            'friction':10,
            'density':5
             
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
       
        World.add(world,this.body);

    }
    display(){
var pos=this.body.position;



ellipseMode(RADIUS)
fill("orange");
ellipse(0,0,this.radius);


    }
}