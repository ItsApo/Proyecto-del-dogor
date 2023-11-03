
import { StyleSheet } from "react-native";

const login_style = StyleSheet.create ({

    
    // ------------------- ( Contenedor de toda la página )

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
        fontSize: '20px',
        fontWeight: '600',
        color: 'white',
    },

    image:  {
        marginTop: '30px',
        marginLeft: '700px',
        width: '30vw',
        height: '30vh',
        position: 'absolute',
       flexDirection: 'row',
       border: '2px solid black',
    },


    

    // ------------------- ( Contenedor del login )

    login_container: {
        backgroundColor: '#383838',
        margin: '5px',
        padding: '5px',
        width:  '90%',
        
    },

    // ------------------- ( Contenedor del input, estilos de los inputs y textos de los inputs )

    input_container: {
        width: '200px',
    },

    input: {
        margin: '10px',
        padding: '10px',
        fontFamily: 'Tahoma',
        width:  '500px',
        border: '1px solid #000000',
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

    // ------------------- ( Contenedor del input de contraseña y icono para ver contraseña )

    input_password: {
        display: 'flex',
        flexDirection: 'row',
        width:  '520px',
    },

    input_icon: {
        top: '5px',
        left: '6px',
    },

    // ------------------- ( Contenedor de los botones y estilos de los botones )

    button_container: {
        width: '270px',
        margin: '5px',
        padding: '5px',
    },

    button: {
        margin: '5px',
        borderRadius: '7px',
        backgroundColor: 'gray',
        width:  '500px',

    },

    

    // ------------------- ( Estilos de los mensajes de alerta )

    message: {
        margin: '10px',
        padding: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
    }

    // -------------------

});

export {login_style};