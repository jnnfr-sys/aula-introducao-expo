import {View, Text, Image } from 'react-native';

import styles from './styles';

import img from '../../../assets/002-1-react-native.png';

import Mensagem from './mensagem';

function Exemplo2 (){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 2</Text>
           <Image source={img} style={styles.imagem}/>

           <Mensagem titulo={'ERRO'}>Voce não clicou corretamente!'</Mensagem>
           <Mensagem titulo={'SUCESSO'}>Acesso permitido!'</Mensagem>
           <Mensagem titulo={'AVISO'} Mensagem={'O tempo acabou'}/>
           
        </View>
    );
}

export default Exemplo2;