
import { StyleSheet } from "react-native";

const rent_style = StyleSheet.create ({

    container: {
        backgroundColor: '#000000',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        margin: '10px',
        padding: '5px',
        fontSize: '16px',
        fontFamily: 'Tahoma',
        fontWeight: '600',
    },    

    form_container: {
        backgroundColor: 'white',
        margin: '10px',
        padding: '10px',
        width:  '41.7%',
        border: '2px solid black',
        justifyContent: 'center'

    },

    input_container: {
        width: '270px',
    },

    input: {
        margin: '10px',
        padding: '10px',
        width:  '500px',
        
        fontFamily: 'Cursive',
        borderRadius: '5px',
        border: '2px solid black',
    },

    input_text: {
        marginLeft: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        fontFamily: 'Tahoma',
        fontWeight: '600',
    },

    button_container: {
        width: '270px',
        margin: '5px',
        padding: '5px',
    },

    row_button_container: {
        flexDirection: 'colum',
        justifyContent: 'center'
    },

    button: {
        margin: '5px',
        borderRadius: '7px',
        width:  '500px',
         backgroundColor: '#000000',
    },

    message: {
        margin: '10px',
        padding: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
    }

});

export {rent_style};
