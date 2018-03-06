    import React, { Component } from "react";
    import ReactDOM from "react-dom";
    
class AppContainer extends Component {
      constructor() {
        super();
        this.state = {
          title: ""
        };
      }
      render() {
        return (
		<main id="app">
		</main>	
        );
      }
}

ReactDOM.render(<AppContainer />, document.querySelector('#content'));

export default AppContainer;
