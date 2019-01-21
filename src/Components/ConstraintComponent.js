import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class ConstraintComponent extends Component{
    render(){
        return(
            <div>
                <Card>
                    <CardContent>
                        <h2>Show constraint expression</h2>
                        <p>For {this.props.firstInput} + {this.props.secondInput} = {this.props.resultInput}</p>
                        <p>the constraint is:</p>
                        <Typography component="p">{this.props.resultFiniteDomain}</Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default ConstraintComponent;