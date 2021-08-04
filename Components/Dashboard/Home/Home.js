import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image, SafeAreaView, Linking } from 'react-native'

import Dialog, { DialogContent } from 'react-native-popup-dialog';

import Icon from 'react-native-vector-icons/FontAwesome';
import { SliderBox } from "react-native-image-slider-box";

import TopNeeds from './TopNeeds';
import QuickMenu from './QuickMenu';
import Offer from './Offer';
import Trending from './Trending';
import Homecare from './Homecare';

export default class Home extends Component {

    static navigationOptions = {
        headerShown: false 
    };

    constructor(props) {
        super(props);
        this.state = {
          images: [
            require('../../../assets/images/s1.jpg'),
            require('../../../assets/images/s2.jpg'),
          ],
          emergencyModalVisible: false
        };
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView style={{backgroundColor:'#fff'}}>

                    <Dialog padding={false} visible={this.state.emergencyModalVisible} onTouchOutside={() => {this.setState({ emergencyModalVisible: false });}} rounded={false} width={0.9}>
                        <View style={{display:'flex', flexDirection:'row'}}>
                            <View style={{flex: 2, display:'flex', flexDirection:'row', padding:10, alignItems:'center', backgroundColor:'#c90707'}}>
                                <Icon name="ambulance" size={30} color="#fff" style={{marginRight:20}} /> 
                                <Text style={{fontSize:20,textTransform:'uppercase',color:'#fff'}}>Emergency</Text>
                            </View>
                            <View style={{flex:1, display:'flex', flexDirection:'row', padding:10, alignItems:'center', backgroundColor:'#dada03'}}>
                                <Icon name="mobile" size={30} color="#000" style={{marginRight:10}} /> 
                                <Text style={{fontSize:20,textTransform:'uppercase',color:'#000'}}>1000</Text>
                            </View>
                        </View>
                        <DialogContent>
                            <View>
                                <Image source={require('../../../assets/images/ambulance.png')} style={{width:200,height:200,alignSelf:'center'}} />
                                <Text style={{ fontSize:16,paddingVertical:10, textAlign:'center', lineHeight:25}}>The emergency is availble in select location, service available only in Bangladesh</Text>
                                <TouchableOpacity onPress={()=>{Linking.openURL('tel:1000');}} style={{backgroundColor:'#c90707',width:'80%',padding:10,borderRadius:30,alignSelf:'center'}}>
                                    <Text style={{color:'#fff',textTransform:'uppercase',fontSize:18,alignSelf:'center'}}>Call</Text>
                                </TouchableOpacity>
                            </View>
                        </DialogContent>
                    </Dialog>

                    <View style={styles.homeHeader}>
                        <TouchableOpacity style={[styles.headeBtn, {flex:2,backgroundColor:'#dada03',padding:15}]}>
                            <Icon name="map-marker" size={25} color="#000" style={{marginRight:5}} /> 
                            <Text style={{fontSize:17,color:'#000'}}>Location</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.headeBtn, {flex:1,backgroundColor:'#c90707',padding:15}]} onPress={() => {this.setState({ emergencyModalVisible: true }); }}>
                            <Icon name="ambulance" size={25} color="#fff" style={{marginRight:5}} /> 
                            <Text style={{fontSize:17,color:'#fff'}}>Emergency</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{backgroundColor:'#234'}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate('FindDoctors')}>
                                <TopNeeds name="calendar" color="#156" title="Book" subTitle="Appointment" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <TopNeeds name="shopping-cart" color="#912" title="Order" subTitle="Medicines" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <TopNeeds name="apple" color="#908" title="Virtual" subTitle="Consultation" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <TopNeeds name="medkit" color="#298" title="Book" subTitle="Health Check" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <TopNeeds name="paragraph" color="#309" title="Book" subTitle="Blood Test" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <TopNeeds name="home" color="#892" title="Our" subTitle="Homecare" />
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                    <View>
                        <SliderBox
                            images={this.state.images}
                            autoplay
                            circleLoop
                            resizeMethod={'resize'}
                            resizeMode={'cover'}
                        />
                    </View>

                    <View style={{padding:10}}>
                        <Text style={{fontSize:20, color:'#234', paddingLeft:3}}>Quick Menu</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <QuickMenu imgUri={require('../../../assets/images/covid.jpeg')} title="Covid-19" subTitle="Consultation" />
                            <QuickMenu imgUri={require('../../../assets/images/health.jpeg')} title="Health" subTitle="Record" />
                            <QuickMenu imgUri={require('../../../assets/images/member.jpeg')} title="Membership" subTitle="Program" />
                            <QuickMenu imgUri={require('../../../assets/images/sepia.jpeg')} title="Our" subTitle="Sitemap" />
                        </ScrollView>
                    </View>

                    <View style={{padding:15}}>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/images/healthcare.jpg')} style={{width:'100%',height:200, resizeMode:'cover', borderRadius:5}} /> 
                        </TouchableOpacity>
                    </View>

                    <View style={{padding:10}}>
                        <Text style={{fontSize:20, color:'#234', paddingLeft:3,marginBottom:5}}>Offer & Services</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Offer imgUri={require('../../../assets/images/off1.jpeg')} />
                            <Offer imgUri={require('../../../assets/images/off2.jpeg')} />
                            <Offer imgUri={require('../../../assets/images/off3.jpeg')} />
                        </ScrollView>
                    </View>

                    <View style={{padding:15}}>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/images/check.jpg')} style={{width:'100%',height:200, resizeMode:'cover', borderRadius:5}} /> 
                        </TouchableOpacity>
                    </View>

                    <View style={{padding:10}}>
                        <Text style={{fontSize:20, color:'#234', paddingLeft:3,marginBottom:5}}>Trending Product</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Trending imgUri={require('../../../assets/images/pro1.jpeg')} title="Nesle Lectozen" price="120" />
                            <Trending imgUri={require('../../../assets/images/pro2.jpeg')} title="Nesle Nan Pro" price="150" />
                            <Trending imgUri={require('../../../assets/images/pro3.jpeg')} title="Ensure Venilla" price="180" />
                            <Trending imgUri={require('../../../assets/images/pro4.jpeg')} title="Nesle Peptamem" price="250" />
                            <Trending imgUri={require('../../../assets/images/pro5.jpeg')} title="Apollo fermacy" price="120" />
                            <Trending imgUri={require('../../../assets/images/pro6.jpeg')} title="Mammy Poko" price="120" />
                        </ScrollView>
                    </View>

                    <View style={{padding:10}}>
                        <Text style={{fontSize:20, color:'#234', paddingLeft:3,marginBottom:5}}>Homecare</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Homecare name="user-md" color="#156" title="Doctor" subTitle="at Home" />
                            <Homecare name="stethoscope" color="#912" title="Nurse" subTitle="at Home" />
                            <Homecare name="heart" color="#908" title="Physio" subTitle="at Home" />
                            <Homecare name="home" color="#298" title="Medical Eq" subTitle="at Home" />
                            <Homecare name="binoculars" color="#309" title="Diagnostic" subTitle="at Home" />
                        </ScrollView>
                    </View>

                </ScrollView>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    homeHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    headeBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});
