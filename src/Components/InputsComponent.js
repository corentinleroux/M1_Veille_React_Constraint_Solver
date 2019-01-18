import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ConstraintComponent from './ConstraintComponent';
import NextSolutionComponent from './NextSolutionComponent';

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

    render(){
        console.log(this.state.firstInput)
        return(
            <div>
                <h2>Word Addition</h2>
                <form noValidate autoComplete="off" style={{display: "flex", flexDirection: "column", verticalAlign: "right"}}>
                    <TextField name="firstInput" placeholder="Enter word here" onChange={this.handleChange} margin="normal"/>
                    <TextField name="secondInput" placeholder="Enter word here" onChange={this.handleChange} margin="normal"/> 
                    <TextField name="resultInput" placeholder="Enter word here" onChange={this.handleChange} margin="normal"/>
                    <Button variant="contained" color="primary" onClick={this.handleClick}>Valider</Button>
                </form>
                <ConstraintComponent resultFiniteDomain={this.resultFiniteDomain}></ConstraintComponent>
                <NextSolutionComponent /*nextSolution={this.state.nextSolutionFiniteDomain}*/></NextSolutionComponent>
            </div>
        );
    }
}

export default InputsComponent;