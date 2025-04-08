import { useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade3() {

    const [num, setNum] = useState(0);

    function handleAdiciona () {
        setNum(num + 1);
    }

    function handleSubtrai () {
        setNum(num - 1);
    }

    function handleZerar () {
        setNum(0);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>

            <View style={styles.container2}>
            <TouchableOpacity style={styles.botao} onPress={handleSubtrai}>
                <Text style={styles.txtBotao}>-1</Text>
            </TouchableOpacity>

            <Text style={styles.numero}>{num}</Text> 

            <TouchableOpacity style={styles.botao} onPress={handleAdiciona}>
                <Text style={styles.txtBotao}>+1</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.botao} onPress={handleZerar}>
                <Text style={styles.txtBotao}>Zerar</Text>
            </TouchableOpacity>


        </View>
    );
}

export default Atividade3;