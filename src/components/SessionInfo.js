// Include the Main React Dependencies
import React from "react";
import GetSessions from "./getSessions";
import axios from "axios";

// construct Main components

class SessionInfo extends React.Component {  

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">

        </div>
            <div className="card-title">
                <h3>
                    Client name here
                </h3>
                
            </div>

        <div id="card-text">
                 <a href="#"><p>{this.props.sessionDate}</p></a>
            </div>
        </div>
    )
  }
}
export default SessionInfo;