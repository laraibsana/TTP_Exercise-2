import React, { Component } from 'react'


class Increment extends Component {
    constructor(props){
        super(props);
        this.state={
            num: props.num
        };

        this.add=this.add.bind(this);
        this.subtract=this.subtract.bind(this);
    }
    add(){
        let i= this.state.num + 1;
        this.setState={num: i};
    };
    
    subtract(){
        if(this.state.num===0){
            alert("CAN'T GO BELOW ZERO")
        }
        else {
            let i= this.state.num - 1;
            this.setState={num: i};
        }
    };
    
    
    
    render(){
        return(
            <div className="Iincrement-Decrement">
                <button onClick={this.add}>Increment</button>
                <button onClick={this.subtract}>Decrement</button>
                <br />
                <p>{this.state.num}</p>

            </div>
        )
    }
}

export default Increment;