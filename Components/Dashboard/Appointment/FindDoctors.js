import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'

import Specialist from './Specialist'

import Icon from 'react-native-vector-icons/FontAwesome';

export default class FindDoctors extends Component {

    static navigationOptions = () => ({
        title: 'Find Doctors',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#156'
        },
    });

    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
                <ScrollView>
                    <View style={{backgroundColor:"#156",padding:10}}>
                        <TextInput 
                            style={{backgroundColor:"#fff",width:"100%",paddingHorizontal:15,borderRadius:5,position:'relative'}}
                            placeholder="Search by doctors & specialist..."
                        />
                        <Icon style={{position:'absolute',zIndex:3,right:25,top:23}} size={20} name="search" color='#156' />
                    </View>
                    <View>
                        <Image style={{width:"100%",height:200}} source={require('../../../assets/images/find-doctors.jpg')} />
                    </View>
                    <View style={{padding:10}}>
                        <Text style={{fontSize:18, color:'#234', paddingLeft:3}}>Specialist</Text>
                        <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SpecialistList')}>
                                <Specialist name="adjust" title="Gynaecology" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SpecialistList')}>
                                <Specialist name="anchor" title="General Medicine" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SpecialistList')}>
                                <Specialist name="asterisk" title="Pediatrics" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SpecialistList')}>
                                <Specialist name="bolt" title="Orthopaedics" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SpecialistList')}>
                                <Specialist name="bookmark" title="Dermatology" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SpecialistList')}>
                                <Specialist name="bug" title="ENT" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SpecialistList')}>
                                <Specialist name="adjust" title="Gynaecology" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SpecialistList')}>
                                <Specialist name="anchor" title="General Medicine" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SpecialistList')}>
                                <Specialist name="asterisk" title="Pediatrics" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SpecialistList')}>
                                <Specialist name="bolt" title="Orthopaedics" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SpecialistList')}>
                                <Specialist name="bookmark" title="Dermatology" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SpecialistList')}>
                                <Specialist name="bug" title="ENT" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
