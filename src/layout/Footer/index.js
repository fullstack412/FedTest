import React from 'react'
import logo from '../../assets/images/Logo/www.knobcreek.com-1311011787501770.svg'

export default class Footer extends React.Component {
  render() {
    const today = new Date()

    return (
      <div className="footer">
        <div className="left">
          <div className="share">
            <p>SHARE ON</p>
            <div className="square-group">
              <div className="small-square"></div>
              <div className="middle-square"></div>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={logo}></img>
        </div>
      </div>
    )
  }
}
