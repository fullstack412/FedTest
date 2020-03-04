import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppContainer from './layout/AppContainer'
import MainRoute from './route/MainRoute'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppContainer>
          <MainRoute />
        </AppContainer>
      </BrowserRouter>
    )
  }
}
