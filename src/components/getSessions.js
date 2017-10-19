// Include the Main React Dependencies
import React from "react";
import SessionInfo from './SessionInfo';
import axios from "axios";

// construct Main components

class GetSessions extends React.Component {  

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.getSessions = this.getSessions.bind(this);
    }

    getSessions() {
        axios.get("http://localhost:8080/getSessions", {
            sessionDate: this.state.sessionDate,
            sessionLocation: this.state.sessionLocation
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
        
            <SessionInfo 
                sessionDate={this.sessionDate} 
                sessionLocation={this.sessionLocation}
            />
            
        </div>
        );
    } 

}
export default GetSessions;