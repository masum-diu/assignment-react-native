import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import ButtonScreen from './src/screens/ButtonScreen';
import BottomTabBar from './src/navigation/BottomTabBar';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#FFC4B6'} barStyle='dark-content' />
      <View style={styles.container}>
        <BottomTabBar />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  }
})

export default App;