import React, { Component } from 'react'
import { Text, Image, TouchableOpacity} from 'react-native'

export default class QuickMenu extends Component {
    render() {
        return (
            <TouchableOpacity style={{width: 120, height: 130, flex:1, justifyContent:'center', alignItems:'center', borderWidth:1,borderColor: '#bbccf9', margin:3, borderRadius:5}}>
                <Image source={this.props.imgUri} style={{width:70,height:70,borderRadius:50,marginBottom:5}} />
                <Text style={{color:'#4a4a4a', fontWeight:'bold'}}>{this.props.title}</Text>
                <Text style={{color:'#4a4a4a'}}>{this.props.subTitle}</Text>
            </TouchableOpacity>
        )
    }
}
