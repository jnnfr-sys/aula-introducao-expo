import { View, Text, Image,  } from 'react-native'; 

import styles from './styles'; 

import img1 from '../../../assets/camiseta1.png';
import img2 from '../../../assets/camiseta2.png';
import img3 from '../../../assets/camiseta3.png';
import img4 from '../../../assets/camiseta4.png';

import Card from './card';

function Atividade2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Atividade 2</Text>
            <Card titulo={'Camiseta ADIDAS'} img={img1} valor={'350,00'}>Camiseta Essential azul claro e preto.</Card>
            <Card titulo={'Camiseta preta Adidas'} img={img2} valor={'250,00'}>Camiseta Adidas Masculina.</Card>
            <Card titulo={'Camiseta Branca'} img={img3} valor={'200,00'}>Camiseta Branca Adidas Masculina.</Card>
            <Card titulo={'Camiseta Vermelha'} img={img4} valor={'150,00'}>Camisa Vermelha Lisa Adidas.</Card>
        </View>
    );
}

export default Atividade2;