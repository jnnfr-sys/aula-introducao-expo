import {View, Text } from 'react-native';

import styles from './styles';


function Mensagem ({titulo, mensagem}){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.texto}>{mensagem}</Text>

            <Mensagem/>
        </View>
    );
}

export default Mensagem;