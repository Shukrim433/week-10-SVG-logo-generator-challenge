const inquirer = require('inquirer')
const {writeFile} = require('fs/promises') // is this just the file system? why is the variable name an object and why /promises. why not fs = require('fs')
const {Circle, Triangle, Square} = require('./shapes')
const {logoText, SVG} = require('./svg')

class CLI { //creating a CLI class
    constructor(){

    }

    run(){  //run() is a method defined on the CLI class

        inquirer
        .prompt([
            {
                type : 'input',
                message : 'enter your logo name? (up to 3 letters)',
                name : 'name'
            },
            {
                type : 'input',
                message : 'enter the colour of your logo. (enter a name or hex code)',
                name : 'colour'
            },
            {
                type : 'input',
                message : 'enter the colour of your logo name. (enter a name or hex code)',
                name : 'nameColour'
            },
            {
                type : 'list',
                options : ['circle', 'square', 'triangle'],
                name : 'shape'
            }
        ])
        .then( (response) => {
        
            const svg = this.generateSvgMarkup(response) //this invokes the other method on this CLI class 'generateSvgMarkup' with the data returned
            //by the users response to the prompts 'response'
        
            const svgMarkup = svg.render() //calls the render() method on whichever svg object/instance is chosen in the switch statement below 
            //render is a method on the SVG class

            writeFile("logo.svg", svgMarkup) //writing the svg markup code (svg logo) to the svg file
        })
        .then( () => {console.log('Yay! Logo successfully generated!') })
        .catch( (error) => {
            console.log(error)
            console.log('Oops! Something went wrong. :(')
        })
    }

    generateSvgMarkup(chosen) { //second method on the CLI class -- chosen is the parameter that 'response' gets passed into/replaces

        const logoName = new LogoName(chosen.name, chosen.nameColour) //creating a new object/instance of the LogoName class and initialising the 
        //name and nameColour properties with the name and nameColour from the response (response.name response.nameColour)

        switch(chosen.shape){ // switch statement checks if the response.shape is a square, circle or triangle
            case "square": //if its square
                const square = new Square(chosen.shape) //creates new object/instance of the Square class and passes in the response.shape
                return new SVG(square, logoName); //returns a new object/instance of the SVG class and passes in the new square object/instance and the new logoName object/instance
            case "circle": //if its a circle...
                const circle = new Circle(chosen.shape)
                return new SVG(circle, logoName);
            case "triangle": //if its a triangle...
                const triangle = new Triangle(chosen.shape)
                return new SVG(triangle, logoName);    
        }

    }
   
}

module.exports(CLI)

