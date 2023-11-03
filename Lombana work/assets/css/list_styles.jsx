
import { StyleSheet } from "react-native";

const list_style = StyleSheet.create ({

    container: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button_container: {
        width: '240px',
        margin: '5px',
        marginTop: '25px',
        padding: '5px',
    },

    button: {
        margin: '5px',
        borderRadius: '7px',
        backgroundColor: 'gray',
    },

    scrollview_container: {
        width: '250px',
        height: 'auto',
        margin: '5px',
        marginTop: '5px',
        marginBottom: '10px',
        padding: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
    },

    list_container: {
        width: '200px',
        margin: '5px',
        padding: '5px',
        alignItems: 'start',
        justifyContent: 'center',
        border: '2px solid #a12b2b',
    },

    list_text: {
        margin: '5px',
        fontFamily: 'Cursive',
    },

});

export {list_style};
