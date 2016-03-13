'use strict'
import React, {
  AppRegistry,
  Component,
} from 'react-native'

import App from './app/components/App'

class iwound extends Component {
  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('iwound', () => iwound)
