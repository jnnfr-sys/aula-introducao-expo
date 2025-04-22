import { Button, StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#ffff',
        padding:8,
        flex: 1,
        justifyContent: 'center',
    },
    paragraph: {
        margin: 6,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000',
    },
    txtSaida: {
        margin: 6,
        fontSize: 22,
        fontWeight:'bold',
        textAlign: 'center',
        color: '#e91e63',
    },
    txtEntrada: {
        borderWidth: 4,
        textAlign: 'center',
        fontSize: 22,
        borderColor: '#e91e63',
        height: 40,
        color: '#e53935',
        borderRadius: 10,
        marginTop:10,
    },
    button: {
        backgroundColor: '#e91e63',
        height: 40,
        justifyContent: 'center',
        borderRadius:10,
        marginTop:20,
    },
    textButton:{
        fontSize: 22,
        color: '#ff80ab',
        textAlign: 'center',
    },
    textLabel:{
        fontSize:16,
        fontWeight: 'bold',
        color: '#c51162'
    },
});

export default styles;