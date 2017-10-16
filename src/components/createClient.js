// Include the Main React Dependencies
import React from "react";
// Include the main Child Components
import ClientForm from "./newClient";

import clientRef from "../database/clientFirebase";
// import axios from "axios";
// import Saved from "./Saved";

// construct Main components

class CreateClient extends React.Component {  

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.addReport = this.addReport.bind(this);
        this.state = {
            clientName: '',
            clientEmail: '',
            clientHomePhone: '',
            clientCellPhone: ''
        }
    }
    
    onChange(e) {
        let prop = e.target.id;
        let update = {};
        update[prop] = e.target.value;
        this.setState(update);
        console.log(prop)
        }

    createClient() {
        alert("it worked");
        let data = {
                clientName: this.state.clientName,
                clientEmail: this.state.clientEmail,
                clientHomePhone: this.state.clientHomePhone,
                clientCellPhone: this.state.clientCellPhone
        };
        console.log(data)
        clientRef.push( data )         
        .then(function (response) {
          console.log(response);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
    render() {
        return(
        <div>
            <div className="jumbotron">
                <h1>Submit your LASSIE Report</h1>
            </div>
        
            <ClientForm 
                createClient={this.createClient} 
                onChange={this.onChange}
            />
            
        </div>
        );
    } 

}
export default CreateClient;