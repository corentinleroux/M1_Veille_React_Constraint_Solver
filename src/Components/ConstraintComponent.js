import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class ConstraintComponent extends Component{
    render(){
        return(
            <div>
                <Card>
                    <CardContent>
                        <h2>Show constraint expression</h2>
                        <p>{this.props.firstInput} + {this.props.secondInput} = {this.props.resultInput}</p>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default ConstraintComponent;