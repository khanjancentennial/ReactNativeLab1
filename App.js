import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: "bold",fontSize:32}}>About Me</Text>
      <Text style={{fontSize:20}}>Khanjan Dave</Text>
      <Text style={{fontSize:20}}>Id: 301307330</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0AFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
