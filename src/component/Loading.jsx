import React, {Component} from 'react';

class Loading extends Component{
    render(){
        return(
            <div>
                <div className="ui active dimmer">
                    <div className="ui text loader">{this.props.message}</div>
                </div>
            </div>
        );
    }
}

export default Loading;