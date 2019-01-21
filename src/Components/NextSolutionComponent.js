import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class NextSolutionComponent extends Component{
    render(){
        return(
            <div>
                <Card>
                    <CardContent>
                        <h2>Show next solution</h2>
                        <Typography component="p">{this.props.nextSolutionFiniteDomain}</Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default NextSolutionComponent;