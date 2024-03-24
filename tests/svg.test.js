//check if logo name entered by user has a maximum .length() of 3 if not it throws an error and tells them to only enter 3 charachters.
//check if logo name entered by user has atleast 1 character long

const { Circle, Square, Triangle } = require("../lib/shapes")
const { LogoName, SVG} = require("../lib/svg")

describe('LogoName text test', () => { //test throw an error if the logoName text a user enters is not between 1 and 3 characters in length.
    it('should throw an error if the length of the logoName text entered is less than 1 or more than 3 charachters long', () => {
        const cb = () => new LogoName('WOOOW', 'blue') // callback function to test a logo name (and you have to pass in a colour too because its the second parameter of the LogoName class constructor )
        //'WOOW' = initialises the 'text' property of the LogoName class constructor
        //'blue' = initialises the 'colour' property of the LogoName class constructor

        const err = new Error('The Logo Name should be between 1 and 3 charachters long!')
        expect(cb).toThrowError(err)
    })
})

//check if logo name text and shape entered by user matches the shape and logo name text rendered in the svg markup:

describe('Circle Logo markup test', () => {
    it('should render the svg markup for a logo with the shape and logo name text the user enters', () => {
        const expectedMarkup = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <text x="150" y="125" font-size="50" text-anchor="middle" fill="white">SVG</text> <circle cx="150" cy="100" r="80" fill="green" /></svg>`
        
        const circle = new Circle('green')
        //'green' = initialises the 'colour' property of the Circle class constructor

        const text = new LogoName('SVG', 'white') 
        //'SVG' = initialises the 'text' property of the LogoName class constructor
        //'white' = initialises the 'colour' property of the LogoName class constructor

        const markupWithUserColourAndName = new SVG (text, circle)
        //text = initialises the 'text' property of the SVG class constructor
        //circle = initialises the 'shape' property of the SVG class constructor

        expect(markupWithUserColourAndName.render()).toEqual(expectedMarkup)
        /* new SVG (text, circle) = creates a new instance/obj of the SVG class and passes into it the new instances/objs :'text' and 
        'circle' */
        /*markupWithUserColourAndName.render() = invokes the render function on 
        - 'text' the new instance of the LogoName class  
        - 'circle' the new instance of the Circle class that we created just previously
        -  'markupWithUserColourAndName'  the new instance of the SVG class
        
        So overall it generates the full svg syntax  using the shape, colour, text and text colour provided*/
    })
})

describe('Square Logo markup test', () => {
    it('should render the svg markup for a logo with the shape and logo name text the user enters', () => {
        const expectedMarkup = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <text x="150" y="125" font-size="50" text-anchor="middle" fill="white">SVG</text> <rect x="90" y="40" width="120" height="120" fill="green" /></svg>`
        
        const square = new Square('green')
        const text = new LogoName('SVG', 'white')
        const markupWithUserColourAndName = new SVG (text, square)

        expect(markupWithUserColourAndName.render()).toEqual(expectedMarkup)
    })
})

describe('Triangle Logo markup test', () => {
    it('should render the svg markup for a logo with the shape and logo name text the user enters', () => {
        const expectedMarkup = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <text x="150" y="125" font-size="50" text-anchor="middle" fill="white">SVG</text> <polygon points="150,20 250,180 50,180" fill="green" /></svg>`
        
        const triangle = new Triangle('green')
        const text = new LogoName('SVG', 'white')
        const markupWithUserColourAndName = new SVG (text, triangle)

        expect(markupWithUserColourAndName.render()).toEqual(expectedMarkup)
    })
})