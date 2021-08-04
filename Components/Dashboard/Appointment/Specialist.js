import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Specialist extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon name={this.props.name} color="#156" style={{fontSize:20,marginRight:5}} />
                <Text style={{color:'#3c3b3b'}}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        flexDirection:'row',
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:'#fff',
        borderRadius:10,
        margin:3,
        padding:10,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android
        elevation: 1
    }
})
