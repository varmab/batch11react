import React, { Component } from 'react'

class Like extends Component{
    constructor(){
        super();

        this.state={
            status:"Like"
        }
    }

    update=()=>{
        if(this.state.status=="Like"){
            this.setState({
                status:"Unlike"
            })
        }
        else
        {
            this.setState({
                status:"Like"
            })
        }
    }

    render(){
        return(
            <button onClick={this.update}>{this.state.status}</button>
        )
    }
}

export default Like;