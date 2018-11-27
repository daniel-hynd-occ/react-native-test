/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Picker, Slider, Switch} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);

    const defaultPlatform = Platform.select({
      ios: "ios",
      android: "android"
    });

    this.state = {
      platform: defaultPlatform,
      text: "",
      slider: 15,
      switch: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello!</Text>
        <TextInput placeholder="Type here..." value={this.state.text} onChangeText={(text)=>this.setState({text: text})} />
        <Button title="Click Me" onPress={()=>{}}/>
        <Picker selectedValue={this.state.platform} style={{width:"100%"}} onValueChange={(value,index) => this.setState({platform: value})}>
          <Picker.Item label="Android" value="android"/>
          <Picker.Item label="iOS" value="ios"/>
        </Picker>
        <Slider style={{width:"100%"}} minimumValue={10} maximumValue={100} value={this.state.slider} onSlidingComplete={(value)=>this.setState({slider: value})}/>
        <Switch value={this.state.switch} onValueChange={(value)=>this.setState({switch: value})} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
