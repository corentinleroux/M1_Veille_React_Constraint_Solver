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

            counter:1,
            resultFiniteDomain:'',
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

        this.state.counter++;

        this.generateConstraint();
        /*
        Pour le groupe qui doit implémenter le solveur il faut le faire ici !!!! 
        @Stéphane !! 
        */

    }

    generateConstraint(){
        var constraint;

        if(this.state.resultInput.size< this.state.firstInput.size|| this.state.resultInput.size < this.state.secondInput.size){
            return 'No possible constraint';
        }

        var reverseFirst = this.state.firstInput.split("").reverse;
        var reverseSecond = this.state.secondInput.split("").reverse;
        var reverseResult = this.state.resultInput.split("").reverse;

        var minimumIndex = Math.min(reverseFirst.size, reverseSecond.size);

        console.log("Going to FORLOOP");

        var i;
        for (i=0; i<minimumIndex; i++){
            console.log(reverseFirst[i] + " + " + reverseSecond[i] + " = " + reverseResult[i]);
        }

        return constraint;
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
                
                <ConstraintComponent firstInput={this.state.firstInput} secondInput={this.state.secondInput} resultInput={this.state.resultInput} resultFiniteDomain={this.state.resultFiniteDomain}></ConstraintComponent>
                <NextSolutionComponent nextSolutionFiniteDomain={this.state.nextSolutionFiniteDomain}></NextSolutionComponent>
            </div>
        );
    }
}

export default InputsComponent;