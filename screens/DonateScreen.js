import React from 'react'
import { View,Text,FlatList,StyleSheet, TouchableOpacity } from 'react-native'
import { ListItem,Icon } from 'react-native-elements'
import MyHeader from "../components/MyHeader"
import firebase from "firebase"
import db from "../config";

export default class DonateScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            allRequests: []
        }
        this.requestRef = null
    }

    keyExtractor = (item,index) => { index.toString() }

    getRequestList = async() => {
        this.requestRef = db.collection("requested_objects")
            .onSnapshot((snapshot) => {
                var requestedObjectList = snapshot.docs.map(document => document.data())
                this.setState({ allRequests:requestedObjectList })
            })
    }

    componentDidMount(){
        this.getRequestList();
    }

    componentWillUnmount(){
        this.requestRef();
    }

    renderItem = ({ item, i }) => {
        return (
            <ListItem 
                key={i} 
                title={item.object_name}
                titleStyle={{ color: 'orange',fontWeight: 'bold' }}
                subtitle={item.reason_to_request}
                leftElement={<Icon name="book" type="font-awesome" color ='#696969'/>}
                rightElement={
                    <TouchableOpacity style={styles.button} 
                        onPress={()=> {
                            console.log("working");
                            this.props.navigation
                                .navigate('ReceiverDetailsScreen',{"details":item})
                        }} >
                        <Text style={{ color: 'white' }}>View</Text>
                    </TouchableOpacity>
                }
                bottomDivider
             />
        )
    }

    render(){
        return (
            <View style={{ flex: 1 }}>
                <MyHeader title="Donate Screen" />
                <View style={{ flex: 1 }}>
                    {
                        this.state.allRequests.length===0
                        ?
                        (
                            <View style={styles.subContainer}>
                                <Text style={{ fontSize: 20,textAlign: 'center',marginTop: 100 }}>
                                    No requests found
                                </Text>
                            </View>
                        )
                        : 
                        (
                            <FlatList 
                                keyExtractor={this.state.keyExtractor} 
                                data={this.state.allRequests}
                                renderItem={this.renderItem} />
                        )
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        width:100,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8
        }
    }
})