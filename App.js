import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';

export default class App extends React.Component {
  state = {
    inputWords: '',
  };

  speak() {
    const words = this.state.inputWords;
    Speech.speak(words);
  }
  render() {
    return (
      <>
        <View style={styles.container}>
          <TextInput
            placeholder="type here"
            onChangeText={(text) => this.setState({ inputWords: text })}
          />
          <Button
            title="Say something"
            onPress={() => {
              this.speak;
            }}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
