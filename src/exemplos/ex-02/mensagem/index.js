import { View, Text } from 'react-native'; 

import styles from './styles'; 

function Mensagem ({ titulo, texto }) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.texto}>{texto}</Text>
        </View>
    );
}

export default Mensagem;

