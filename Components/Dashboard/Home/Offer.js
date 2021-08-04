import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'

export default class Offer extends Component {
    render() {
        return (
            <TouchableOpacity>
                <Image source={this.props.imgUri} style={{margin:3, borderRadius:5, height:200}} />
            </TouchableOpacity>
        )
    }
}
