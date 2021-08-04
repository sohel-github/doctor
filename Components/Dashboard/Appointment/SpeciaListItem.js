import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

export default class SpeciaListItem extends Component {
    render() {

        const days = ['Sat','Sun','Mon','Tue','Wed','Thu','Fri' ];

        return (
            <TouchableOpacity>
                <View style={{backgroundColor:'#fff',margin:10,padding:7}}>
                    <View style={{display:'flex', flexDirection:'row'}}>
                        <Image style={{width:70,height:70,marginRight:10}} source={this.props.imgUri} />
                        <View>
                            <Text style={{fontWeight:'bold',fontSize:17,marginBottom:3,color:'#4f4e4e'}}>{this.props.name}</Text>
                            <Text style={{marginBottom:3, color:'#4f4e4e'}}>{this.props.dept}</Text>
                            <Text style={{marginBottom:4, color:'#4f4e4e'}}>Exp : {this.props.exp}</Text>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center',marginBottom:4}}>
                                <Icon name={this.props.mapIcon} size={20} color="#156" style={{marginRight:5}} />
                                <Text style={{color:'#4f4e4e'}}>{this.props.location}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{width:'100%',height:1,backgroundColor:'#f0f0f0',marginTop:10}}></View>

                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10,paddingHorizontal:5}}>
                        { days.map((day,index) => {
                            return <Text style={{textTransform:'uppercase',color:'#4f4e4e'}} key={index}>{day}</Text>
                        }) }
                        
                    </View>

                    <Text style={{color:'#4f4e4e',paddingLeft:4}}>{this.props.schedule}</Text>

                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                        <TouchableOpacity style={{flex:1,padding:10,backgroundColor:'#f5f5f5'}}>
                            <Text style={{color:'#156',alignSelf:'center',fontWeight:'bold'}}>{this.props.viaCall}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1,padding:10,backgroundColor:'#e9e7e7'}}>
                            <Text style={{color:'#e03601',alignSelf:'center',fontWeight:'bold'}}>{this.props.viaApp}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
