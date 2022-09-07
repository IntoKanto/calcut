import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, Alert, View } from 'react-native';

export default function App() {
const [luku1 , setLuku1] = useState("");
const [luku2, setLuku2] = useState("");
const [result, setResult] = useState("");

const plus =()=>{
 setResult('Result: ' + (parseInt(luku1)+parseInt(luku2)));
 setLuku1(""); setLuku2("");
}
const miinus =()=>{
 setResult('Result: ' + (luku1 -luku2));
 setLuku1(""); setLuku2("");

}


  return (
    <View style={styles.container}>
     <Text style={styles.teksti}>{result}</Text>
      <TextInput 
      style={styles.input}
      value={luku1}
      onChangeText={luku1 => setLuku1(luku1)}
      keyboardType='numeric'
      />
      <TextInput 
      style={styles.input}
      value={luku2}
      onChangeText={luku2 => setLuku2(luku2)}
      keyboardType='numeric'
      />

      <View style={styles.buttons}>
        <Button 
        title ="+" onPress={plus}/>
        <Button
        title ="-" onPress={miinus}/>
      </View>
     
      <StatusBar style="auto" />
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
  input: {
    width:150,
    borderColor:'blue',
    borderWidth:1
  },
  buttons: {
    justifyContent: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  teksti: {
    fontWeight: 'bold'
  },
 
});
