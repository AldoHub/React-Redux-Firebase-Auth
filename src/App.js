import React, { Component } from 'react';
//impor the store
import Store from "./store";
import {Provider} from "react-redux";

import Header from "./components/header";

//import the routes
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={Store}>
          <div className="container">
           <Header />            
            <main>
              <Routes />
            </main>
            
          </div>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
