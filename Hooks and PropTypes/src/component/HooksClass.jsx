import React, { Component } from 'react'

export class HooksClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
    render() {
        return (
            <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
         Increase
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })} disabled={this.state.count === 0 ? true:false}>
          Decrease
        </button>
      </div>
        )
    }
}

export default HooksClass
