import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,ImageBackground } from 'react-native';

export default function MainContainer (){
  return(
    <View style={styles.container}>
    <Text style={styles.container}> Hello Component</Text>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    margin:0,
    color:'blue',
    fontSize:35
  },
  
})