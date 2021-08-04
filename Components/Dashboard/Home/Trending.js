import React, { Component } from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'

export default class Trending extends Component {
    render() {
        return (
            <TouchableOpacity style={{width: 150, height: 190, flex:1, justifyContent:'center', alignItems:'center', borderWidth:1,borderColor: '#bbccf9', margin:3, borderRadius:5}}>
                <Image source={this.props.imgUri} style={{width:90,height:120,marginBottom:5}} />
                <Text style={{color:'#4a4a4a'}}>{this.props.title}</Text>
                <Text style={{color:'#4a4a4a',fontWeight:'bold'}}>BDT {this.props.price}</Text>
            </TouchableOpacity>
        )
    }
}
