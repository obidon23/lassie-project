import React, { Component } from 'react';
import './App.css';
import AddReport from './components/addReport';
import CreateClient from './components/newClient';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="header col-sm-12">
            <div className="">

            </div>
          </div>
        </div>
        <AddReport />
        <CreateClient />
      </div>
    );
  }
}

export default App;
