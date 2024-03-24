//create a class for the svg opening and closing tag
//create a class for the text inside the text element and the colour of the text. (aka the logo name)

class LogoName{
    constructor(text, colour){
        this.text = text
        this.colour = colour
    }
    render(){
        return ` <text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.colour}">${this.text}</text>` //this.colour represents
        //the name(text)colour entered by user -- this.text represents the text (logo name) entered by user.
    }
}

class SVG {
    constructor(text, shape){ 
        this.text = text
        this.shape = shape
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.text.render()} ${this.shape.render()}</svg>` //this.shape
        // represents the shape thats entered by user and its svg markup -- this.test represents the text thats entered by user and its svg markup
    }
}

module.exports = { LogoName, SVG }