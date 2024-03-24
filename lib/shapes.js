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
        return `<circle cx="150" cy="100" r="80" fill="${this.colour}" />`
    }
}

class Triangle extends Shape{ //response.colour will be passed into the/replace this colour parameter if triangle is selected by user
    constructor(colour){
        super(colour)
        this.colour = colour
    }
    render(){
        return `<polygon points="100,20 20,180 180,180" fill="${this.colour}" />`
    }
}

class Square extends Shape{
    constructor(colour){ //response.colour will be passed into the/replace this colour parameter if square is selected by user
        super(colour)
        this.colour = colour
    }
    render(){
        return `<rect x="50" y="50" width="100" height="100" fill="${this.colour}" />`
    }
}

module.exports('Shapes')