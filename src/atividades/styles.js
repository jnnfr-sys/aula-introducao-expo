import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    titulo: {
        fontSize: RFValue(20),
        fontWeight: 'bold',
        color: '#4B0082',             //Indigo
        marginTop: RFValue(15),
        marginBottom: RFValue(20),
    },
    botao: {
        alignItems: 'center',
        borderWidth: RFValue(2),
        borderColor: '#4B0082',       //Indigo
        borderRadius: RFValue(10),
        padding: RFValue(10),
        width: '80%',
        marginBottom: RFValue(10),
    },
});

export default styles;