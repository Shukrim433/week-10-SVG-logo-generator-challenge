class Shape{//what is the purpose of this shape super class? 
    constructor(colour = '#cccccc'){
        this.colour = colour
    }
    setShapeColour(colour){ //what is the purpose of this method?
        this.colour = colour
    }
}

class Circle extends Shape{ //response.colour will be passed into the/replace this colour parameter if circle is selected by user
    constructor(colour) {
        super(colour)
        this.colour = colour
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.colour}" />` //this.colour represents the (shape)colour entered by user
    }
}

class Triangle extends Shape{ //response.colour will be passed into the/replace this colour parameter if triangle is selected by user
    constructor(colour){
        super(colour)
        this.colour = colour
    }
    render(){
        return `<polygon points="150,20 250,180 50,180" fill="${this.colour}" />` //this.colour represents the (shape)colour entered by user
    
    }
}

class Square extends Shape{
    constructor(colour){ //response.colour will be passed into the/replace this colour parameter if square is selected by user
        super(colour)
        this.colour = colour
    }
    render(){
        return `<rect x="90" y="40" width="120" height="120" fill="${this.colour}" />` //this.colour represents the (shape)colour entered by user

    }
}

module.exports = { Circle, Triangle, Square }