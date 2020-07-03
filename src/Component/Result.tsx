import React, {Component} from 'react';

interface IResultValues {
    result : any;
}


class Result extends Component <IResultValues> {
    render() {
        // let {result} = this.props;
        return (
            <div className="result">
                <p>{this.props.result}</p>
            </div>
    );
    }
}
export default Result;