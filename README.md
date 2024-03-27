# week-10-SVG-logo-generator-challenge

## Description
- I wanted to create a logo generator application using node.js in svg markup to allow users to create a simple logo based on their input.

## Process
- The fist thing i did was create a CLI.js file and in this file i imported 'inquirer', 'fs/promises', './shapes' (the module that holds the Circle, Square and Triangle classes),and './svg' (the module that holds the SVG and LogoNames classes).
-Then i created a CLI class with a constructor function inside, then i added a run() method to the CLI class which contains the questions array in the iquirer.propmt() method. Then i attatched a .then() method to that with a callback function containing the 'response' as its parameter, which essentiallyallows you to handle the response data returned by the user answering the question.
So in this callback function i created a variable called 'svg' which essentially invokes the generateMarkup method (the other method on this CLI class) with 'response'. Next a variable called svgMarkup which calls the render() method (on the SVG class) of whichever svg object/instance is chosen in the switch statement below   --   render is a method on the SVG class.
Then writeFile("logo.svg", svgMarkup) writes the svg markup code (the svg logo) to the svg file.
-Then the second method on the CLI class is the generateMarkup method. I created a variable called logoName which creates a new object/instance of the LogoName class and initialises the name and nameColour properties with the name and nameColour from the response (response.name response.nameColour). Then the switch statement checks if the response.shape is a square, circle or triangle. If its square,circle or triangle it creates new object/instance of the Square class and passes in the response.shape, then it returns a new object/instance of the SVG class and passes in the new square object/instance and the new logoName object/instance

- In the index.js file i imported the CLI module, created a new instance of the CLI class and called cli.run(), to invoke the run method on the new cli instance to basically run the whol application

- In the shapes.js file i created a class for each shape, the square, circle and triangle and each class has a constructor with the parameter colour and this.colour = colour to save the colour property to the class. So the response.colour will be passed into the/replace the 'colour' parameter of the shape class that is chosen by the user. Each shape class also has a render method which returns a template literal of the svg markup for that shape, with the fill="${this.colour}". And this.colour represents the (shape)colour entered by user.

- In the svg.js file i created a class called LogoName, which had a constructor with 2 parameters of 'text' and 'colour', it also includes in the constructor an if statement that checks if the logoname text entered by the user is not 1-3 characters long it throws a new instance of the Error class. The LogoName class also has a render method which returns a template literal of the svg markup for the text of the logo with fill="${this.colour}">${this.text}, and this.colour represents the name(text)colour entered by user -- this.text represents the text (logo name) entered by user.
Then with the SVG class it has a constructor with 2 parameters of text and shape. And a return method that returns a template literal of the svg markup of the entire logo with everything in it from, text, text colout, shape and shape colour with ${this.text.render()} ${this.shape.render()} this.shape represents the shape thats entered by user and its svg markup -- this.text represents the text thats entered by user and its svg markup.

- In shapes.test.js i created a test for each shape that checks if the colour enteres by the user is the same as the colour that is rendered in the markup.

- In svg.test.js i created a test for the LogoName class to throw an error if the length of the logoname text entered by the user is not 1-3 charachters long. And another test to check if the logoname text entered by the user is the same as the on rendered in the markup. 
Then i did a test for the SVG class to check if the logo name, logo name colour, shape and shape colour entered by the user are all the same as the ones rendered in the svg markup.

## Webpage

- These are links to a demo of the application:
https://watch.screencastify.com/v/Y1HtMj2hDPH4F5H5vi8j
https://watch.screencastify.com/v/bA0OzPAgMBLuFnnlsIgT
