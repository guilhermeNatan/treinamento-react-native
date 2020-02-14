
// <div id="root"> </div>
//
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./src/components/Header";


export default function App() {
  return (
    <View style={styles.container}>
      <Header title={"Pessoas"}/>
    </View>
  );
}

const styles = StyleSheet.create({
});
