import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage';

export default class Splash extends Component {

    static navigationOptions = {
        headerShown: false 
    };

    componentDidMount = async () =>{
        this.checkLogin();
        this.listener = this.props.navigation.addListener("didFocus", this.checkLogin);
    }

    componentWillUnmount() {
        this.listener.remove();
    }

    checkLogin = async () => {
        const isToken = await AsyncStorage.getItem('key');
        if(isToken){
          this.props.navigation.navigate('Home');
        }else{
          setTimeout(() => {
            this.props.navigation.navigate('Signin');
          }, 1000);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Doctor Appointment</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4486ff'
    },
    logo: {
        color: "#fff",
        fontSize: 20
    }
});
