import * as React from 'react'
import { Header,Icon,Badge } from 'react-native-elements'
import { View,Text } from 'react-native'

const myHeader = props => {
    return (
        <Header 
            centerComponent={{
                text: props.title,
                style: { color: '#90A5A9',fontSize: 20,fontWeight: 'bold' }
            }}
            backgroundColor='#EAF8FE' />
    )
}

export default myHeader;