import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import styles from '../atividade-4/styles';

export default function Index(){

  const [textoEscrito, setTextoEscrito] = useState('');
  const [mensagem, setMensagem] = useState ('Texto programado');

  const ExibeTexto = () => {
    setMensagem(textoEscrito);
    setTextoEscrito('');
  }

    return(
        <View style={styles.container}> 
          <Text style={styles.paragraph}>
            Atividade 4
          </Text>

          <Text style={styles.txtSaida}>
            {mensagem}
          </Text>

          <Text></Text>
          <TextInput 
          style={styles.txtEntrada}
          onChangeText={(entrada) => setTextoEscrito(entrada)}
          value={textoEscrito}
          />

          <TouchableOpacity 
          style={styles.button} onPress={ExibeTexto}>
            <Text style={styles.textButton}>Exibir texto</Text>
          </TouchableOpacity>


        </View>
    );
}