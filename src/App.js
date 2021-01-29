import { waitForDomChange } from "@testing-library/react"
import React from "react"
import PropTypes from "prop-types"

class App extends React.Component {
    state = {
      count: 0
    };

    add = () => {
      this.setState(current => ({ count: this.state.count + 1 }))
    };

    min = () => {
      this.setState(current => ({ count: this.state.count - 1 }))
    };
    
    render(){
      return (
        <div>
          <h1>The count: {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.min}>Minus</button>
        </div>
        
      ) 
    }
}

export default App;
