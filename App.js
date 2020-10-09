import * as React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import WelcomeScreen from './screens/WelcomeScreen'

export default function App() {
  return (
    <AppContainer/>
  )
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  AppDrawerNavigator: {screen: AppDrawerNavigator}
})

const AppContainer = createAppContainer(switchNavigator);