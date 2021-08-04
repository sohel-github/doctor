import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Signin extends Component {

    static navigationOptions = {
        headerShown: false 
    };

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.authHeading}> Welcome </Text>
                <Text style={styles.authMessage}> Signin to continue </Text>
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                />
                <TouchableOpacity style={styles.authBtn} onPress={()=>this.props.navigation.navigate('Home')}>
                    <Text style={styles.authbtntext}>Signin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.authFB}>
                    <Text style={styles.authFBtext}>Signin with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.authGoogle}>
                    <Text style={styles.authGoogleText}>Signin with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginBottom:5}}>
                    <Text>Dont have an account? 
                        <Text style={{fontWeight:'bold'}}> Signup</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Forget Password?
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding:15,
    },
    authHeading: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf:'flex-start'
    },
    authMessage: {
        fontSize: 15,
        alignSelf:'flex-start',
        color: '#7e7e7f',
        marginBottom:15
    },
    input: {
        backgroundColor: '#f0eff5',
        color: "#fff",
        fontSize: 20,
        width:'100%',
        paddingHorizontal:15,
        paddingVertical: 12,
        marginBottom:10,
        fontSize:14,
        borderRadius:5
    },
    authBtn: {
        width:'100%',
        backgroundColor:'#4486ff',
        borderRadius:5,
        paddingHorizontal:15,
        paddingVertical: 12,
        marginBottom: 10
    },
    authbtntext: {
        alignSelf: 'center',
        color: '#fff',
        fontSize:15
    },
    authFB: {
        width:'100%',
        backgroundColor:'#3d6ad6',
        borderRadius:5,
        paddingHorizontal:15,
        paddingVertical: 12,
        marginBottom:10
    },
    authFBtext: {
        alignSelf: 'center',
        color: '#fff',
        fontSize:15
    },
    authGoogle: {
        width:'100%',
        backgroundColor:'#d93025',
        borderRadius:5,
        paddingHorizontal:15,
        paddingVertical: 12,
        marginBottom:10
    },
    authGoogleText: {
        alignSelf: 'center',
        color: '#FFF',
        fontSize:15
    },
});