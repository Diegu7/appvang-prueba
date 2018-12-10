import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  state = {
    todo: '',
    list: []
  }

  handleSubmit = (event) => {

  }

  render() {
    return (
      <View style={styles.container}>
          <TextInput 
            autocorrect={false}
            placeholder="Write a to-do"
            placeholderTextColor="white"
            style={styles.textInput}
            clearButtonMode="always"
          />
          <Button
            styles={styles.button}
            onPress={this.handleSubmit}
            title="+"
            color="black"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: '#666',
    color:'white',
    height:40,
    width:280,
    marginTop:30,
    marginHorizontal:20,
    paddingHorizontal:10,
    alignSelf:'stretch'
  },
  box: {
    height: 40,
  },
  button: {
    height: 40,
    width: 40,
  },
});
