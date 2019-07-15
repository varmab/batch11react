import React, {Component} from 'react'

class Users extends Component{
    constructor(){
        super();

        this.state={
            users:[],
            loading:true,
            error:false
        }
    }

    render(){

        if(this.state.loading==true){
            return(
                <React.Fragment>
                    <h1>Users</h1>
                    <p>Loading...</p>
                </React.Fragment>
            )
        }

        if(this.state.error==true){
            return(
                <React.Fragment>
                    <h1>Users</h1>
                    <p><h3>Sorry..</h3> <br/>Failed to load. Please try again later</p>
                </React.Fragment>
            )
        }
        return(
            <React.Fragment>
                <h1>Users</h1>
                <ul>
                {
                    this.state.users.map((user)=>{
                        return <li key={user.id}>{user.name}</li>
                    })
                }
                </ul>
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch('https://jsonplaceholderxxxx.typicode.com/users')
        .then(response=>response.json())
        .then((latestUsers)=>{
            this.setState({
                users:latestUsers,
                loading:false
            })
        })
        .catch((err)=>{
            this.setState({
                error:true,
                loading:false
            })
        })
    }
}

export default Users;