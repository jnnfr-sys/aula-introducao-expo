import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';

export default function Atividade6() {

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const [mensagem, setMensagem] = useState('');
    const mensErro = 'Valores inseridos de forma incorreta!';

    function calculaImc() {
        const tmpImc = peso / (altura * altura);
        setImc(tmpImc);

        if (tmpImc < 18.5) {
         setMensagem('Abaixo do peso');
       } else if (tmpImc >= 18.5 && tmpImc <= 24.9) {
         setMensagem('Peso normal');
       } else if (tmpImc >= 25 && tmpImc <= 29.9) {
         setMensagem('Sobrepeso');
       } else if (tmpImc >= 30 && tmpImc <= 34.9) {
         setMensagem('Obesidade grau I');
       } else if (tmpImc >= 35 && tmpImc <= 39.9) {
         setMensagem('Obesidade grau II');
       } else if (tmpImc >= 40) {
         setMensagem('Obesidade grau III');
       } else {
         setMensagem('Valor fora da faixa conhecida');
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

            <Text style={[styles.imc, styles.txtMensagem]}>{mensagem}</Text>

            <Botao calcular={calculaImc}>Calcular</Botao>
        </View>
    )
}
