import { StyleSheet } from 'react-native'; 
import { RFValue } from 'react-native-responsive-fontsize'; 

const styles = StyleSheet.create({ 
    container: {
        width: '100%', 
        borderWidth: RFValue(1), 
        marginTop: RFValue(10), 
        borderColor: '#32CD32', 
    }, 
    input: {
        height: RFValue(50),         
        fontSize: RFValue(16),        
    },  
    button: {
        backgroundColor: '#32CD32', 
        padding: RFValue(5),  
    }, 
    buttonText: {
        color: '#fafafa', 
        fontSize: RFValue(20), 
        textAlign: 'center',
    }, 
});

export default styles;

