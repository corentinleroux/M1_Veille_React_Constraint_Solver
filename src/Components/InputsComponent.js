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

            resultFiniteDomain:'testResult',
            nextSolutionFiniteDomain:'testSolution',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange (event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleClick(){
        console.log(this.state.firstInput);
        console.log(this.state.secondInput);
        console.log(this.state.resultInput);
        /*
        Pour le groupe qui doit implémenter le solveur il faut le faire ici !!!! 
        @Stéphane !! 
        */

    }

    generateConstraint(){
        var constraint;

        if(this.state.resultInput.size() < this.state.firstInput.size() || this.state.resultInput.size() < this.state.secondInput.size()){
            return 'No possible constraint';
        }

        var reverseFirst = this.state.firstInput.split("").reverse();
        var reverseSecond = this.state.secondInput.split("").reverse();
        var reverseResult = this.state.resultInput.split("").reverse();

        var minimumIndex = Math.min(reverseFirst.size(), reverseSecond.size());

        //for (i=0; i<minimumIndex; i++){
        //    console.log(reverseFirst[i] + " + " + reverseSecond[i] + " = " + reverseResult[i]);
        //}

        return constraint;
    }

    render(){
        console.log(this.state.firstInput)
        return(
            <div style={{display: "flex", flexDirection:"row", justifyContent:"space-around"}}>
                <Card>
                    <CardContent>
                        <form noValidate autoComplete="off" style={{display: "flex", flexDirection: "column", verticalAlign: "right"}}>
                            <h2>Word Addition</h2>
                            <TextField name="firstInput" placeholder="Enter word here" onChange={this.handleChange} margin="normal"/>
                            <TextField name="secondInput" placeholder="Enter word here" onChange={this.handleChange} margin="normal"/> 
                            <TextField name="resultInput" placeholder="Enter word here" onChange={this.handleChange} margin="normal"/>
                            <Button variant="contained" color="primary" onClick={this.handleClick}>Valider</Button>
                        </form>
                    </CardContent>
                </Card>
                
                <ConstraintComponent resultFiniteDomain={this.resultFiniteDomain}></ConstraintComponent>
                <NextSolutionComponent /*nextSolution={this.state.nextSolutionFiniteDomain}*/></NextSolutionComponent>
            </div>
        );
    }
}

export default InputsComponent;