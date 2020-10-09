import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import DonateScreen from '../screens/DonateScreen'
import ExchangeScreen from '../screens/ExchangeScreen'

export const AppTabNavigator = createBottomTabNavigator({
    Donate: {screen: DonateScreen},
    Exchange: {screen: ExchangeScreen}
})