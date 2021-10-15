import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';

const setName = (firtstName, secondName, thirdName) => {
  return firtstName + " " + secondName + " " + thirdName;
}

const Cafe = (props) => {
  const [isEmpty, setEmpty] = useState(true);

  return (
  <View>
      <Text>
        There are {props.number} {isEmpty?'empty':'filled'} Coffee {props.number < 1 ? 'cup':'cups'} here !
      </Text>

      <Button
      onPress={() => {
        setEmpty(false);
      }}
      disabled={!isEmpty}
      title={isEmpty?'Fill':'Set empty'}
      ></Button>
  </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
      />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <div>
        {setName('Joyce', 'Finunu', 'Makiese')}
      </div>
      <Cafe number="44"></Cafe>

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
