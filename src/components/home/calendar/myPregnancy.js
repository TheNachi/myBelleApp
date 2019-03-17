import React, { Component } from 'react'
import { View, Text, Image, ScrollView, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Card from'../../common/card'

class Mypregnancy extends Component {
    
    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <ScrollView style={{ flex: 1, width: '100%'  }}>
                    <View style={{ alignItems: 'center', marginTop: 10,alignSelf: 'center', justifyContent: 'center', borderWidth: 5, flexDirection: 'row', width: '90%', flex: 1}}>
                    <ImageBackground 
                        style={{ height: 150, width: 200, flex: 1 }}
                        source={require('../../../assets/15weeks.jpeg')}
                        >
                        <View>
                        </View>
                    </ImageBackground>
                    <ImageBackground 
                        style={{ height: 150, width: 200, flex: 1 }}
                        source={require('../../../assets/apple.jpeg')}
                        >
                        <View>
                        </View>
                    </ImageBackground>
                    </View>
                    <Card>
                        <View style={styles.containerStyle}> 
                            <View style={{ flexDirection: 'row'}}>
                                <Icon name='calendar-multiselect' size={30} color='#cf32f2' style={{  }} />
                                <Text style={{ color: '#cf32f2', padding: 5, fontSize: 20, fontWeight: '600' }}>
                                    Trimester Changes
                                </Text>
                            </View>
                            <Text style={{ fontSize: 22, }}>
                                How will you feel/What to do about it 
                            </Text>
                            <Text style={{ paddingTop: 15, fontSize: 16 }}>
                                Today's tips: Do you know?
                            </Text>
                            <Text style={{ fontSize: 16}}>
                                You may experience stuffy nose and sinusitis
                            </Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.containerStyle}> 
                            <View style={{ flexDirection: 'row'}}>
                                <Icon name='file-document-box-outline' size={30} color='#cf32f2' style={{  }} />
                                <Text style={{ color: '#cf32f2', padding: 5, fontSize: 20, fontWeight: '600' }}>
                                    Your To Do Lists
                                </Text>
                            </View>
                            <Text style={{ fontSize: 22, }}>
                                Add activities to carry out this week
                            </Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.containerStyle}> 
                            <Text style={{ fontSize: 22, }}>
                                Rhinitis During Pregnancy: Flu, Cough and Catarrh
                            </Text>
                            <Image style={{ height: 150, width: '100%', alignSelf: 'center', marginTop: 5, marginBottom: 5 }} source={require('../../../assets/nasal-cavity.jpeg')} />
                            <Text style={{ fontSize: 22, }}>
                                Seasonal allergic rhinitis (hay fever) is most often caused by pollen......
                            </Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.containerStyle}> 
                            <Text style={{ fontSize: 22, }}>
                                Weight gain during pregnancy
                            </Text>
                            <Image style={{ height: 150, width: '100%', alignSelf: 'center', marginTop: 5, marginBottom: 5 }} source={require('../../../assets/Pregnancy-weight.jpg')} />
                            <Text style={{ fontSize: 22, }}>
                                Seasonal allergic rhinitis (hay fever) is most often caused by pollen......
                            </Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.containerStyle}> 
                            <Text style={{ fontSize: 22, }}>
                                Exercise: Putting pillows between your legs to deal with Sciatic Pain
                            </Text>
                            <Image style={{ height: 150, width: '100%', alignSelf: 'center', marginTop: 5, marginBottom: 5 }} source={require('../../../assets/pregnancy-pillow.jpg')} />
                            <Text style={{ fontSize: 22, }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do wousmod tempor indhdifnnfi...
                            </Text>
                        </View>
                    </Card>
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: '#cf32f2',
        paddingBottom: 5
    },
    containerStyle: {
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        borderColor: '#ddd',
        position: 'relative',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
}

export default Mypregnancy