import { StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ffcdd2',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      color:'#b71c1c',
    },
    txtSaida: {
        margin: 24,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#e53935',
    },
    txtEntrada: {
        fontSize: 20,
        textAlign: 'center',
        height: 50,
        color:'#e53935',
        borderRadius: 10,
        borderColor: '#b71c1c',
        borderWidth: 4,
    },
    button: {
        backgroundColor: '#e53935',
        height:40,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop:20,
    },
    textButton: {
        fontSize: 22,
        color: '#ffcdd2',
        textAlign: 'center',
    },
    
  });

  export default styles;