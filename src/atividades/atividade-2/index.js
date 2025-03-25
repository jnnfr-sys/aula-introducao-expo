import { View, Text, Image, ScrollView } from 'react-native'; 

import styles from './styles'; 

import img from '../../../assets/camiseta1.png';
import img2 from '../../../assets/camiseta2.png';
import img3 from '../../../assets/camiseta3.png'

import Mensagem from './mensagem';

function Atividade2 () {
    return(
        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>
 
            <Mensagem titulo={'camiseta essentials'}>Você não clicou corretamente blablabla!
            <Image source={img} style={styles.imagem} />
            </Mensagem>

            <Mensagem titulo={'SUCESSO'}>Acesso permitido
            <Image source={img2} style={styles.imagem} />
            </Mensagem>

            <Mensagem titulo={'AVISO'}>O tempo acabou!
            <Image source={img3} style={styles.imagem} />
            </Mensagem>
        </View>
        </ScrollView>
    );
}

export default Atividade2;