import { StyleSheet } from 'react-native'; 
import { RFValue } from 'react-native-responsive-fontsize'; 

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fafafa', 
        alignItems: 'center', 
        borderRadius: RFValue(2), 
        padding: RFValue(10), 
    },  
    titulo: {
        fontSize: RFValue(30), 
        color: '#32CD32', 
        fontWeight: 'bold', 
        borderWidth: RFValue(2), 
        borderColor: '#32CD32', 
        marginTop: 10, 
        marginBottom: 10, 
        padding: 8, 
        width: '100%', 
        height: 80, 
        textAlign: 'center', 
        textAlignVertical: 'center', 
        borderRadius: 50,
    }, 
    cabecalho: {
        backgroundColor: '#32CD32', 
        width: '100%', 
        padding: RFValue(20), 
        alignItems: 'center', 
        color: '#fafafa', 
        fontSize: RFValue(20), 
        textAlign: 'center', 
    }, 
    lista: { 
        marginTop: RFValue(10), 
        width: '100%', 
    },
});

export default styles;

