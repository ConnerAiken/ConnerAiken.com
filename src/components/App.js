import React, { Component } from "react";
import ReactDOM from "react-dom"; 
import style from './App.scss';

class AppContainer extends Component {
      constructor() {
        super();
        this.state = {
          title: ""
        };
      }

      render() {
        return (
          <div id="container"> 
              <div id="header">

              </div>
              <div id="sidebar">

              </div> 
              <div id="content">

              </div>
              <div id="footer">

              </div>
          </div>
        );
      }
}

ReactDOM.render(<AppContainer />, document.querySelector('main'));

export default AppContainer;
