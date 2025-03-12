import { StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#DDA0DD',
        padding:8,
        flex: 1,
        alignItems: 'center',
    },
    titulo: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        color: '#800080',
        borderWidth: 5,
        borderColor: '#800080',
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
        color: '#000',
        borderWidth: 2,
        borderColor: '#800080',
        
    },
});

export default styles;