// Include the Main React Dependencies
import React from "react";

// Include the main Child Components
import UserLoginForm from "./UserLoginForm";

import axios from "axios";

// construct User Login components

class UserLogin extends React.Component {  

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.userLogin = this.userLogin.bind(this);
        this.state = {
            username: '',
            password: '',
        }
        console.log(axios);
    }
    
    onChange(e) {
        let prop = e.target.id;
        let update = {};
        update[prop] = e.target.value;
        this.setState(update);
    }
    
    userLogin() {
        axios.post("http://localhost:8080/userLogin", {
            username: this.state.username,
            password: this.state.password
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });   
        }
    render() {
        return(
        <div>
        
            <UserLoginForm 
                userLogin={this.userLogin} 
                onChange={this.onChange}
            />
            
        </div>
        );
    } 

}
export default UserLogin;