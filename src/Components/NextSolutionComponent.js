import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class NextSolutionComponent extends Component{
    solutionParse(jsonObject){
        var solutionString='';
        for(var key in jsonObject.values){
            solutionString += key + '=' + jsonObject.values[key].value + ' ^ ';
        }
        return solutionString.substr(0, solutionString.length-2);
    }

    render(){
        return(
            <div>
                <Card>
                    <CardContent>
                        <h2>Show next solution</h2>
                        <Typography component="p">{this.solutionParse(this.props.nextSolutionFiniteDomain)}</Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default NextSolutionComponent;