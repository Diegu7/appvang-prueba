import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  state = {
    todo: '',
    list: []
  };

  handleSubmit = (event) => {
    let x = this.state.list;
    x.push(this.state.todo);
    this.setState({list: x});
    this.setState({todo: ''});
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
            <TextInput 
              autocorrect={false}
              placeholder="Write a to-do"
              placeholderTextColor="white"
              style={styles.textInput}
              clearButtonMode="always"
              value={this.state.todo}
              onChangeText={event => this.setState({todo: event})}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={this.handleSubmit}
              color="black"
            >
              <Text style={styles.text}> +</Text>
            </TouchableOpacity>
        </View>
        <Text>
        </Text>
        <View style={styles.box}>
          {
            this.state.list.map((todo) => {
              return (
                <View style={styles.box}>
                  <Text style={styles.text2}>{todo}</Text>
                </View>
              )
            })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
    flexDirection: 'row',
    marginTop:30,
  },
  textInput: {
    backgroundColor: '#666',
    color:'white',
    height:40,
    width:280,
    
    marginHorizontal:20,
    paddingHorizontal:10,
    alignSelf:'stretch'
  },
  box: {
    height: 40,
    width: 300,
    alignSelf:'center'
  },
  button: {
    width: 30,
    height: 40,
    backgroundColor: 'black',
    alignSelf:'stretch',
  },
  text:{
    color:'white',
    fontSize: 30,
  },
  text2:{
    fontSize: 20,
    textAlign: 'center',
  },
});
