import React, { Component } from 'react';
import { Container, Content, Tab, Tabs } from 'native-base';
import { View } from 'react-native'
import Header from '../../common/header'
import Modal from 'react-native-modal'
import ANC from './anc'
import Mypregnancy from './myPregnancy'
import Sidebar from '../../common/sidebar'

export default class Calendar extends Component {

  state = {
    selected: undefined,
    isModalVisible: false
}

onValueChange = (value) =>
    this.setState({
      selected: value
    });

_toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible })

  render() {
    return (
      <Container>
        <Header
            title="Calendar" 
            leftIcon='menu'
            rightIcon="search"
            hasTabs 
            />
        <Tabs 
            tabBarUnderlineStyle={{ backgroundColor: '#cf32f2' }}
            >
            <Tab heading="MY PREGNANCY" 
                activeTabStyle={{ backgroundColor: 'white' }} 
                tabStyle={{ backgroundColor: 'white' }} 
                activeTextStyle={{ color: '#cf32f2'}} 
                textStyle={{ color: 'gray'}} >
                <Mypregnancy />
            </Tab>
            <Tab heading="ANC" 
                activeTabStyle={{ backgroundColor: 'white' }} 
                tabStyle={{ backgroundColor: 'white' }} 
                activeTextStyle={{ color: '#cf32f2'}} 
                textStyle={{ color: 'gray'}}>
                <ANC />
            </Tab>
        </Tabs>
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          >
          <View style={{ width:'90%', height:'105%', marginLeft: -17}}>
              <Sidebar />
          </View>
        </Modal>
      </Container>
    );
  }
}