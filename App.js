import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

// Exemplos
import Exemplo1 from './src/exemplos/ex-01';
import Exemplo2 from './src/exemplos/ex-02';

// Atividades
import Atividade1 from './src/atividades/atividade-1';
import Atividade2 from './src/atividades/atividade-2';

import Mensagem from './src/atividades/atividade-2';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade2/>
      <Mensagem/>
      <StatusBar style="light" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 8,
    paddingTop: Constants.statusBarHeight || 8,
  },
});