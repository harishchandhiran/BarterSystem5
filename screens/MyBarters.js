import React from 'react'
import { View,Text,FlatList,StyleSheet, TouchableOpacity } from 'react-native'
import { ListItem,Icon } from 'react-native-elements'
import MyHeader from "../components/MyHeader"
import firebase from "firebase"
import db from "../config";

export default class MyBarters extends React.Component {
    constructor(){
        super();
        this.state = {
            donorId : firebase.auth().currentUser.email,
            donorName : "",
            allDonations : []
        }
        this.requestRef = null
    }

    static navigationOptions = { header : null };

    getDonerDetails = async(donerId) => {
        db.collection("users").where("email_Id","==",donerId).get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    this.setState({ 
                        "donorName": doc.data().first_name + " " + doc.data().last_name
                     })
                })
            })
    }

    getAllDonations = async() => {
        this.requestRef = db.collection("all_donations")
            .where("donor_id",'==',this.state.donorId)
            .onSnapshot((snapshot) => {
                var allDonations = [];
                snapshot.docs.map((doc) => {
                    var donation = doc.data()
                    donation["doc_id"] = doc.id
                    allDonations.push(donation)
                })
                this.setState({
                    allDonations : allDonations
                });
            })
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item,i }) => {
        <ListItem 
            key={i} />
    }

    render(){
        return (
            <View style={{ flex: 1 }}>
                <MyHeader navigation={this.props.navigation} title="My Barters" />
                <View style={{ flex:1 }}>
                    
                </View>
            </View>
        )
    }
}