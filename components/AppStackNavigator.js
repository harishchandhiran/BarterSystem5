import * as React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen'
import { AppDrawerNavigator } from './AppDrawerNavigator'

export const AppStackNavigator = createStackNavigator({
    Donate: {screen: AppDrawerNavigator,

    },
    ReceiverDetailsScreen: {screen: ReceiverDetailsScreen,
        
    }
},
{
    initialRouteName: 'Donate'
})