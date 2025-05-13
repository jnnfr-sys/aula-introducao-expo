import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';

export default function Atividade6() {

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const mensErro = 'Valores inseridos de forma incorreta!';

    function calculaImc() {
        const tmpImc = peso / (altura * altura);
        setImc(tmpImc);
    }

    const mensagem = () => {
        if (imc < 18,5){
            return <Text>Abaixo do peso</Text>
        }
        if (imc > 18,5 && imc <= 24,9){
            return <Text>Peso normal</Text>
        }
        if (imc > 25 && imc <= 29,9){
            return <Text>Sobrepeso</Text>
        }
        if (imc > 30 && imc <= 34,9){
            return <Text>besidade grau 1</Text>
        }
        if (imc > 35 && imc <= 39,9){
            return <Text>Obesidade grau 2</Text>
        }
        if (imc > 40){
            return <Text>Obesidade grau 3</Text>
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 6</Text>
            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura} />
            </View>

            <Text style={styles.imc}>{isNaN(imc) ? mensErro : imc.toFixed(2)}</Text>

            <Text style={[styles.imc, styles.txtMensagem]}>{mensagem()}</Text>

            <Botao calcular={calculaImc}>Calcular</Botao>
        </View>
    )
}