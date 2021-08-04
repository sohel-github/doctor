import React, { Component } from 'react'
import { Text, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Homecare extends Component {
    render() {
        return (
            <TouchableOpacity style={{width: 120, height: 120, flex:1, justifyContent:'center', alignItems:'center', borderWidth:1,borderColor: '#bbccf9', margin:3, borderRadius:5}}>
                <Icon name={this.props.name} color={this.props.color} style={{fontSize:20, backgroundColor:'#f0f0f0', padding:10, borderRadius:50, marginBottom:5,width:50,height:50 ,alignItems:'center', textAlign:'center',textAlignVertical:'center'}} />
                <Text style={{color:'#000', fontWeight:'bold'}}>{this.props.title}</Text>
                <Text style={{color:'#000'}}>{this.props.subTitle}</Text>
            </TouchableOpacity>
        )
    }
}
