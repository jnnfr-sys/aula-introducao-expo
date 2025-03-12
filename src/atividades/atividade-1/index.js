import {View, Text } from 'react-native';

import styles from './styles';

function Atividade1 (){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 1</Text>
            <Text style={styles.texto}>Primeira Atividade de react-native com Expo</Text>
        </View>
    );
}

export default Atividade1;