// Include the Main React Dependencies
import React from "react";
// Include the main Child Components
import Lassieform from "./Lassieform";

import sessionRef from "../database/firebase";
// import axios from "axios";
// import Saved from "./Saved";

// construct Main components

class AddReport extends React.Component {  

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.addReport = this.addReport.bind(this);
        this.state = {
            sessionDate: '',
            sessionLocation: '',
        }
    }
    
    onChange(e) {
        let prop = e.target.id;
        let update = {};
        update[prop] = e.target.value;
        this.setState(update);
    }

    addReport() {
        let data = {
                sessionDate: this.state.sessionDate,
                sessionLocation: this.state.sessionLocation
        };
        console.log(data)
        sessionRef.push( data )         
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
        
            <Lassieform 
                addReport={this.addReport} 
                onChange={this.onChange}
            />
            
        </div>
        );
    } 

}
export default AddReport;