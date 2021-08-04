import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

export default class TopNeeds extends Component {
    render() {
        return (
            <View style={{width: 120, height: 120, flex:1, justifyContent:'center', alignItems:'center'}}>
                <Icon name={this.props.name} color={this.props.color} style={{fontSize:20, backgroundColor:'#fff', padding:10, borderRadius:50, marginBottom:5, width:50,height:50 ,alignItems:'center', textAlign:'center',textAlignVertical:'center'}} />
                <Text style={{color:'#fff', fontWeight:'bold'}}>{this.props.title}</Text>
                <Text style={{color:'#fff'}}>{this.props.subTitle}</Text>
            </View>
        )
    }
}
