import React, { Component } from 'react'
import { View, SafeAreaView, ScrollView, TextInput } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import SpeciaListItem from './SpeciaListItem';

export default class SpecialistList extends Component {

    static navigationOptions = () => ({
        title: 'Specialist Name',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#156'
        },
    });

    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:"#f0f0f0"}}>
                <View style={{backgroundColor:"#156",padding:10}}>
                    <TextInput 
                        style={{backgroundColor:"#fff",width:"100%",paddingHorizontal:15,borderRadius:5,position:'relative'}}
                        placeholder="Search by doctors & specialist..."
                    />
                    <Icon style={{position:'absolute',zIndex:3,right:25,top:23}} size={20} name="search" color='#156' />
                </View>
                <ScrollView>
                    <SpeciaListItem 
                        imgUri={require('../../../assets/images/doc_men.png')}
                        name="Dr Dev Mastain"
                        dept="Obstretician & Gynecologist"
                        exp="10 Yrs"
                        mapIcon="map-marker"
                        location="Gynecologist Hospital Ltd"
                        schedule="12:00 PM - 01:00 PM"
                        viaCall="Book via Call"
                        viaApp="Book via App"
                    />
                    <SpeciaListItem 
                        imgUri={require('../../../assets/images/doc_men.png')}
                        name="Dr Lokman Hossain"
                        dept="Obstretician & Gynecologist"
                        exp="6 Yrs"
                        mapIcon="map-marker"
                        location="Gynecologist Hospital Ltd"
                        schedule="12:00 PM - 01:00 PM"
                        viaCall="Book via Call"
                        viaApp="Book via App"
                    />
                    <SpeciaListItem 
                        imgUri={require('../../../assets/images/doc_women.png')}
                        name="Dr Selina Rahman"
                        dept="Obstretician & Gynecologist"
                        exp="5 Yrs"
                        mapIcon="map-marker"
                        location="Gynecologist Hospital Ltd"
                        schedule="12:00 PM - 01:00 PM"
                        viaCall="Book via Call"
                        viaApp="Book via App"
                    />
                    <SpeciaListItem 
                        imgUri={require('../../../assets/images/doc_men.png')}
                        name="Dr Mafuzur Rahman"
                        dept="Obstretician & Gynecologist"
                        exp="10 Yrs"
                        mapIcon="map-marker"
                        location="Gynecologist Hospital Ltd"
                        schedule="12:00 PM - 01:00 PM"
                        viaCall="Book via Call"
                        viaApp="Book via App"
                    />
                </ScrollView>
            </SafeAreaView>
        )
    }
}
