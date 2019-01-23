import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ConstraintComponent from './ConstraintComponent';
import NextSolutionComponent from './NextSolutionComponent';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class InputsComponent extends Component{
    constructor(){
        super();
        this.state={
            firstInput:'',
            secondInput:'',
            resultInput:'',

            nextSolutionFiniteDomain:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange (event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleClick(){
        this.setState({
            resultFiniteDomain: 'Constraint ' + this.state.counter,
            nextSolutionFiniteDomain: 'NextSolution ' + this.state.counter});

        /*
        Pour le groupe qui doit implémenter le solveur il faut le faire ici !!!! 
        @Stéphane !! 
        */
        const util = require('util');

        const inputs = [
            this.state.firstInput + " + " + this.state.secondInput + " == " + this.state.resultInput,
        ];

        var tokenize = function(input) {
            // Extract the left-side from the right-side of the equation.
            const parts = input.split(/[\+\= ]/).filter(part => part !== '');

            // Get unique tokens and initialize lowest possible values to start with.
            let tokens = {};
            parts.forEach(part => {
                for (let i=0; i<part.length; i++) {
                    const token = part[i];

                    // If this is the first token in the word, it must be at least 1 (no leading zeroes). If a token was already assigned a 1, use 1 even if the current word has the token in the middle of the word (0).
                    tokens[token] = { value: i === 0 ? 1 : (tokens[token] ? tokens[token].value : 0), first: tokens[token] && tokens[token].first || i === 0 };
                }
            });

            return { parts: parts, tokens: tokens };
        }

        var encode = function(parts, tokens) {
            // Replace the characters in each part by their cooresponding values in tokens.
            let equation = [];

            for (let i=0; i<parts.length; i++) {
                const part = parts[i];
                let number = '';

                for (let j=0; j<part.length; j++) {
                    const ch = part[j];
                    const value = tokens[ch].value;

                    number += value;
                }

                equation.push(parseInt(number));
            }

            return equation;
        }

        var complete = function(equation) {
            // Check if the left-side equals the right-side of the equation.
            let sum = 0;

            for (let i=0; i<equation.length - 1; i++) {
                sum += equation[i];
            }

            return { sum: sum, target: equation[equation.length - 1], success: (sum === equation[equation.length - 1]) };
        }

        var random = function(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        var solve = function(input, tokens, verbose) {
        	console.log("TOTO : " + input);
        	console.log("TITI " +JSON.stringify(tokens));
        	console.log("objet" + tokens);
        	console.log("affichage objet index : " + tokens[0]);
        	//console.log("AZERTY :  " + tokens.get("c"));
        	console.log("TATA " + verbose);
            let count = 0;
            var fringe = [ tokens ];
            let result = null;

            while (fringe.length) {
                // Get the next state.
                const values = fringe.shift();

                // Encode the equation with values from the state.
                const equation = encode(input, values)
                const balance = complete(equation);

                if (verbose && ++count % 100000 === 0) {
                    count = 0;
                    console.log(equation);
                    console.log(result);
                }

                if (balance.success) {
                    // Solution found!
                    result = { values: values, equation: equation, balance: balance };
                    break;
                }
                else {
                    // Add child states. A child state will be
                    let child = {};
                    const keys = Object.keys(values);
                    for (let i=0; i<keys.length; i++) {
                        const key = keys[i];
                        const first = values[key].first;
                        let r = random(10);
                        r = first && !r ? 1 : r; // No leading zeroes.

                        child[key] = { value: r, first: first };
                    }

                    fringe.push(child);
                }
            }

            return result;
        }

        inputs.forEach(input => {
            const data = tokenize(input);

            console.log(data.parts);

            const result = solve(data.parts, data.tokens);

            console.log('*** Solution ***');
            //TODO Valentin
            console.log(util.inspect(result, true, 10));
            console.log("Afficahge util" + JSON.stringify(util.inspect(result)));
            console.log("Affichage result ::::: " + JSON.stringify(result));
            console.log("affichage result sans stringify " + result[0]);
            console.log(JSON.parse(JSON.stringify(result)));
            let resultJSON = JSON.parse(JSON.stringify(result));
            for(var tutu in resultJSON.values){
            	console.log("KEY = " + tutu + "  VALUE = " + resultJSON.values[tutu].value);
            }

            this.setState({nextSolutionFiniteDomain:resultJSON});

            console.log('');
        });

    }

    render(){
        console.log(this.state.firstInput)
        return(
            <div className="globalContent">
                <Card>
                    <CardContent>
                        <form noValidate autoComplete="off" className="cardForm">
                            <h2>Word Addition</h2>
                            <TextField name="firstInput" placeholder="Enter the first word here" onChange={this.handleChange} margin="normal"/>
                            <TextField name="secondInput" placeholder="Enter the second word here" onChange={this.handleChange} margin="normal"/> 
                            <TextField name="resultInput" placeholder="Enter result word here" onChange={this.handleChange} margin="normal"/>
                            <Button variant="contained" color="primary" onClick={this.handleClick}>Valider</Button>
                        </form>
                    </CardContent>
                </Card>
                
                <ConstraintComponent firstInput={this.state.firstInput} secondInput={this.state.secondInput} resultInput={this.state.resultInput}></ConstraintComponent>
                <NextSolutionComponent nextSolutionFiniteDomain={this.state.nextSolutionFiniteDomain}></NextSolutionComponent>
            </div>
        );
    }
}

export default InputsComponent;