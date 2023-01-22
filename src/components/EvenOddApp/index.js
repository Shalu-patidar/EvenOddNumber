// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    console.log(Math.ceil(Math.random() * 100))
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const value = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg">
        <div className="counter-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {value}</p>
          <button className="btn" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para-1">*Increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
