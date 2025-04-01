import {View, Text, Button} from 'react-native';

import styles from './styles';

function Exemplo3 (){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Text style={styles.texto}>Aula de react-native com Expo</Text>
            <Button
            onPress={()=>{}}
            title="Alerta"
            color="deepskyblue"
            accessibilityLabel="Mensagem de Alerta"
            />
                
           
        </View>
    );
}

export default Exemplo3;