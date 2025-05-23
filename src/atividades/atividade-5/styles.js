import { Button, StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#ffffff',
        padding: 10,
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
    operadores:{
        //flex: 1,
        alignItems:'center',
        flexDirection: 'row',
        height: 50,
        padding: 5,
        justifyContent: 'center',
        borderRadius:10,
        margin: 2,
    },
    txtSaida: {
        margin: 8,
        fontSize: 25,
        fontWeight:'bold',
        textAlign: 'center',
        color: '#8A2BE2',
    },
    txtEntrada: {
        borderWidth: 3,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        borderColor: '#8A2BE2',
        height: 45,
        color: 'Black',
        borderRadius: 10,
        marginTop: 10,
    
    },

    button: {
        backgroundColor: '#8A2BE2',
        height: 40,
        width: RFPercentage(8),
        justifyContent: 'center',
        borderRadius: 10,
        marginTop:20,
        marginLeft: 5,
        marginRight: 5,
        padding: RFPercentage(1),
    },

    buttonZ: {
        backgroundColor: '#8A2BE2',
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
        color: '#8A2BE2',
    },
});

export default styles;