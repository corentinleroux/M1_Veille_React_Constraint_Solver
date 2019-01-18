import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class NextSolutionComponent extends Component{
    constructor(){
        super();
        this.state={
            resultConstraint:'',/*this.props.nextSolutionFiniteDomain,*/
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render(){
        return(
            <div>
                <Card>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Show next solution</Typography>
                        <Typography component="p"></Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default NextSolutionComponent;