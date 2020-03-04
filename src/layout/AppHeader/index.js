import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/Logo/www.knobcreek.com-1311011787501770.svg'
// import adbimage from '../../assets/images/photography/KnobCreek.png'
import adbimage from '../../assets/images/DynamicPage/KnobCreek_Maple6.png'
import card from "../../assets/images/photography/pour-mug.jpg"

import icon from '../../assets/images/iconography/Article.svg'

export default class AppHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="top">
          <p className="author"> Sponsored By</p>
        </div>
        <header>
          <div className="logo">
            <img src={logo}></img>
          </div>
          <div className="middle">
            {/* <div > */}
            <div className="square-logo">
              <p>LOGO</p>
            {/* </div> */}
            </div>
          </div>
          <div className="right">
            <div className="square-group">
              <div className="small-square"></div>
              <div className="middle-square"></div>
            </div>
          </div>
        </header>
        <div className="content">
          {/* <img src={bg}></img> */}
          <div className="content-description">
            <div className="title">
              <h1>
                Maple Never Tasted So Good
              </h1>
              <p className="description">
                We blend this bourbon with natural smoked maple flavors for a unique, smoky sweetness. Full bodied, inviting maple notes that lift to smoke and are complemented with rich vanilla caramel. Smoked hickory and maple woo , with hints of earthy grains
              </p>
            </div>
          </div>
          <div className="adbimage">
            <img src={adbimage} className="adb"></img>
          </div>
        </div>
        <div className="header-card">
          <div className="left">
              <img src={card}></img>
          </div>
          <div className="right">
              <img src={icon} className="icon"></img>
              <p className="date">november 20</p>
              <h3>Too Much Flavor For Four Walls To Hold</h3>
              <p className="description">There are only so many hours in a day, so we make every glass count. We craft full-flavored whiskyey for those who find a way to get the most out of every minute of every day...</p>
              <Link to="/" className="action">Read More</Link>
          </div>
        </div>
      </div>
    )
  }
}
