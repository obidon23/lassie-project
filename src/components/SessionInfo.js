// Include the Main React Dependencies
import React from "react";
import GetSessions from "./getSessions";
import axios from "axios";

// construct Main components

class SessionInfo extends React.Component {  

  constructor(props) {
    super(props);
    this.state = {
      sessionDate: '',
      sessionLocation: '',
    }
  }

  render() {
    return (
        <div className="card">
          <div className="card-title">
            List of Sessions
          </div>
          <ul className="list-group list-group-flush">
              <li className="list-group-item">{this.props.sessionDate}</li>
          </ul>
        </div>
    )
  }
}
export default SessionInfo;