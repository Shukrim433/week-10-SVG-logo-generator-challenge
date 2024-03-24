//tests to check if colour entered for each shape subclass is equal to the one generated in the markup.
const {Circle, Triangle, Square} = require('../lib/shapes')
    describe('Circle colour test', () => {
        it('should render the circle svg  markup with the colour the user entered.', () =>{
            const expectedMarkup =  `<circle cx="150" cy="100" r="80" fill="blue" />`//what we expect the code to look like when the user enters blue as the colour 
            const markupWithUserColour = new Circle('blue') //section of code from the actual code. passing in the colour 'blue'
            expect(markupWithUserColour.render()).toEqual(expectedMarkup)
        })
    })
    describe('Square colour test', () => {
        it('should render the square svg  markup with the colour the user entered.', () =>{
            const expectedMarkup = `<rect x="90" y="40" width="120" height="120" fill="pink" />`//what we expect the code to look like when the user enters blue as the colour 
            const markupWithUserColour = new Square('pink') //section of code from the actual code. passing in the colour 'blue'
            expect(markupWithUserColour.render()).toEqual(expectedMarkup)
        })
    })
    describe('Triangle colour test', () => {
        it('should render the triangle svg  markup with the colour the user entered.', () =>{
            const expectedMarkup = `<polygon points="150,20 250,180 50,180" fill="green" />`//what we expect the code to look like when the user enters blue as the colour 
            const markupWithUserColour = new Triangle('green') //section of code from the actual code. passing in the colour 'blue'
            expect(markupWithUserColour.render()).toEqual(expectedMarkup)
        })
    })

    //when a user provides input through Inquirer prompts, the input is always classified as a string, regardless of whether they enter numbers 
    //or other characters. Inquirer treats all user input as strings by default.
    //So no need to test the 'typeOf' of the colour entered.

    
    //test to check if the hex code a user enters is valid if not it throws an error:
    