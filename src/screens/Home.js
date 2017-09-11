import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Picker
} from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Picker selectedValue="js" onValueChange={()=>{}}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <Text style={styles.welcome}>
          Welcome to React Native! heh
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.jsdd12
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
