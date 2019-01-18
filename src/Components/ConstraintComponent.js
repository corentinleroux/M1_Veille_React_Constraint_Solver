import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class ConstraintComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            resultFiniteDomain:this.props.resultFiniteDomain,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render(){
        //console.log(this.props.resultFiniteDomain)
        return(
            <div>
                <Card>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Show constraint expression {this.resultFiniteDomain}</Typography>
                        <Typography component="p">{this.resultFiniteDomain}</Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default ConstraintComponent;