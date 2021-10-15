import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import { HeaderSet } from './appParts/header';

const setName = (firtstName, secondName, thirdName) => {
  return firtstName+" "+secondName+" "+thirdName;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <ScrollView>
        <div>
          {setName('Joyce', 'Finunu', 'Makiese')}
        </div>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
