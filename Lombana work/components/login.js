
import React, { useState, useEffect } from "react";

import { Button, IconButton } from "react-native-paper";

import { TextInput, View, Text, Image } from "react-native";

import { useNavigation } from '@react-navigation/native';

import { login_style } from "../assets/css/login_styles";

import { useAppContext } from "../AppContexts";

export default function LoginScreen() {

    const { accounts, setAccounts } = useAppContext();

    const navigation = useNavigation();

    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState(''); 
    const [messageColor, setMessageColor] = useState(false); 

    const createAccount = () => {
        
        if (user === "" || name === "" || password === "") {

            setMessage("Debes ingresar todos los campos")
            setMessageColor(false);

        } else if (!/^[a-zA-Z0-9]+$/.test(user)) {

            setMessage("El usuario solo puede contener letras y números");
            setMessageColor(false);

        } else if (!/^[a-zA-Z\s]+$/.test(name)) {

            setMessage("El nombre solo puede contener letras y espacios");
            setMessageColor(false);

        } else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {

            setMessage("La contraseña debe contener letras y números");
            setMessageColor(false);

        } else if (accounts.some((account) => account.user === user)) {

            setMessage("El usuario ya existe");
            setMessageColor(false);

        } else {

            const account = { user, name, password };
            setAccounts([...accounts, account]);
            clearInputs();
            setMessage("Cuenta creada exitosamente");
            setMessageColor(true);
        } 
    };

    const singIn = () => {

        const account = accounts.find((account) => account.user === user && account.password === password);

        if (user === "" || password === "") {

            setMessage("Debes ingresar el usuario y contraseña")
            setMessageColor(false);

        } else if (account) {

            clearInputs();
            setMessage("")
            navigation.navigate('Car')

        } else {

            setMessage("El usuario no existe");
            setMessageColor(false);
        }
    };

    const clearInputs = () => {
        setUser("");
        setName("");
        setPassword("");
    };

    return (

        <View style={login_style.container}>
              
            <View style={login_style.login_container}>

              <Text style={login_style.title}>LOGIN </Text>
              
              <Image 

                source={require('../assets/images/cars.jpg')}
                style={login_style.image}
                /> 
                <View style={login_style.input_container}>

                    <Text style={login_style.input_text}>Ingresa un usuario</Text>

                    <TextInput 
                        style={login_style.input}
                        onChangeText={(text) => setUser(text)}
                        value={user}
                    />

                    <Text style={login_style.input_text}>Nombre del usuario</Text>

                    <TextInput 
                        style={login_style.input}
                        onChangeText={(text) => setName(text)}
                        value={name}
                    />    

                    <Text style={login_style.input_text}>Ingresa tu contraseña</Text>

                    <View style={login_style.input_password}>

                        <TextInput 
                            style={login_style.input}
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                            secureTextEntry={!showPassword}
                        />  

                        <IconButton
                            style={login_style.input_icon}
                            icon={showPassword ? 'lock' : 'lock-open'}
                            onPress={() => setShowPassword(!showPassword)}
                        /> 
                        
                    </View>

                </View>

                <View style={login_style.button_container}> 

                    <Button
                        style={login_style.button}
                        textColor="#ffffff"
                        onPress={createAccount}
                    >
                        Crear cuenta
                    </Button>

                    <Button
                        style={login_style.button}
                        textColor="#ffffff"
                        onPress={singIn}
                    >
                        Iniciar sesión
                    </Button>
                    
                </View>

            <Text style={[login_style.message, {color: messageColor ? 'green' : 'red'}]}>{message}</Text> 

            </View>

        </View>

    );
};
