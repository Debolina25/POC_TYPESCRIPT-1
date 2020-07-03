import React, { Component } from 'react';
import Result from '../Component/Result';
import Keypad from '../Component/Keypad';

type PropsType =  {};

interface  ICal {
    result : any;
}


class Main extends Component<PropsType ,ICal > {
    constructor(props : PropsType){
    super(props);

    this.state = {
        result: ""
    }
}

onClick = (button:any) => {
    console.log("hi")

    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
};


calculate = () => {
    console.log(this.state.result)
    try {
        this.setState({
            // eslint-disable-next-line
            result: (eval(this.state.result) || "" ) + ""
        })
        console.log(this.state.result)
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};

reset = () => {
    this.setState({
        result: ""
    })
};

backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
};
render() {
    return (
        <div>
            <div className="calculator-body">
                <h1>Simple Calculator</h1>
                <Result result={this.state.result}/>
                <Keypad onClickButton={this.onClick}/>
            </div>
        </div>
    );
}
}

export default Main;