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
                message : 'enter the colour of your logo? (enter a name or hex code)',
                name : 'colour'
            },
            {
                type : 'list',
                options : ['circle', 'square', 'triangle'],
                name : color
            }
        ])
        .then( (response) => {
    
        })
        .then( () => {console.log('Yay! Logo successfully generated!') })
        .catch( (error) => {
            console.log(error)
            console.log('Oops! Something went wrong. :(')
        })
    }
}

module.exports(CLI)

