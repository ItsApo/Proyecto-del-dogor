
import { StyleSheet } from "react-native";

const car_style = StyleSheet.create ({

    container: {
        backgroundColor: '#ffffff',
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
        backgroundColor: '#2A2A2A',
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
        fontFamily: 'Cursive',
        borderRadius: '5px',
        border: '2px solid black',
        width:  '500px',
    },

    input_text: {
        marginLeft: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        fontFamily: 'Cursive',
        fontWeight: '600',
        color: 'white',
    },

    button_container: {
        width: '270px',
        margin: '5px',
        padding: '5px',
    },

    row_button_container: {
        flexDirection: 'colum',
        justifyContent: 'center',
    },

    button: {
        margin: '5px',
        borderRadius: '7px',
        width:  '500px',
        backgroundColor: 'gray',
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

export {car_style};
