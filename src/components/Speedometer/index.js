// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncreament = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecreament = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading2">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="speedometer"
            alt="speedometer"
          />
          <h1 className="main-heading">Speed is {speed}mph</h1>
          <p className="paragraph1">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button className="button button1" onClick={this.onIncreament}>
              Accelerate
            </button>
            <button className="button button2" onClick={this.onDecreament}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
