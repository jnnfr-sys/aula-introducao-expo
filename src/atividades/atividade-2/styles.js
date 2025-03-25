import { StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff', 
        padding: 10, 
        //flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 20,
    }, 
    titulo: {
        fontSize: RFPercentage(3), 
        color: 'deepskyblue', 
        fontWeight: 'bold', 
        borderWidth: 2, 
        borderColor: 'deepskyblue', 
        marginTop: 10, 
        marginBottom: 10, 
        padding: 20, 
        width: '100%', 
        height: 90, 
        textAlign: 'center', 
        textAlignVertical: 'center', 
        borderRadius: 15,
    }, 
    imagem: {
        height: RFPercentage(10), 
         width: RFPercentage(28), 
        width: '75%',  
        resizeMode: 'contain', 
    },
});

export default styles;