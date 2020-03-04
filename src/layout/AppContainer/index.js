import React from 'react'

import AppHeader from '../AppHeader'
import Footer from '../Footer'

export default class App extends React.Component {

  render() {
    return (
      <div className="body">
        <AppHeader />
        <div className="container">{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}
