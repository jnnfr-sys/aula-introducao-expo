import { StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fefefe', 
        padding: 8, 
        flex: 1, 
        alignItems: 'center', 
        borderRadius: 20,
    }, 
    titulo: {
        fontSize: RFPercentage(3), 
        color: '#FF00FF', 
        fontWeight: 'bold', 
        marginTop: 10, 
        marginBottom: 10, 
        padding: 8, 
        width: '100%', 
        height: 80, 
        textAlign: 'center', 
        textAlignVertical: 'center', 
        borderRadius: 20,
    }, 
    texto: {
        fontSize: RFPercentage(2.2),  
    }, 

    container2:{
        flex: 1,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#FFE1FF',
        width: '90%',
        padding: 5, 
        alignItems: 'center', 
        marginBottom: RFPercentage(1),
        borderRadius: 20,
    },
    numero: {
        fontSize: RFPercentage(4), 
        color: 'coral',
        margin: RFPercentage(2),
    }, 
    botao: {
        backgroundColor: '#FF83FA', 
        width: '35%', 
        // height: RFPercentage(4), 
        borderRadius: RFPercentage(2), 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: RFPercentage(1),
    }, 
    txtBotao: {
        fontSize: RFPercentage(2), 
        color: '#fafafa', 
        fontWeight: 'bold', 
        letterSpacing: 1.5,
    },
});

export default styles;