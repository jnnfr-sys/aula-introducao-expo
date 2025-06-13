import { StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#E6E6FA',
        padding:8,
        flex: 1,
        borderRadius: 20,
    },
    titulo: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        color: '#4B0082',
        borderWidth: 5,
        borderColor: '#4B0082',
        borderRadius: 100,
        marginTop: 20,
        marginBottom: 20,
        padding: 20,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    texto: {
        fontSize: RFPercentage(2.2),
   
    },
    image: {
        flex:1,
        alignItems: 'center',
    },
});

export default styles;