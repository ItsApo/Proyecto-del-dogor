
import React, { useState, useEffect } from "react";

import { Button } from "react-native-paper";
import { TextInput, View, Text, Image } from "react-native";

import { useNavigation } from '@react-navigation/native';

import { car_style } from "../assets/css/car_styles";

import { useAppContext } from "../AppContexts";

export default function CarScreen() {
    
    const { cars, setCars } = useAppContext();

    const navigation = useNavigation();

    const [plateNumber, setPlateNumber] = useState('');
    const [brand, setBrand] = useState('');
    const [message, setMessage] = useState(''); 
    const [messageColor, setMessageColor] = useState(false); 

    const saveCar = () => {
        
        if (plateNumber === "" || brand === "") {

            setMessage("Debes ingresar todos los campos");
            setMessageColor(false);

        } else if (!/^[a-zA-Z0-9]+$/.test(plateNumber)) {

            setMessage("La placa del automovil solo puede contener letras o números");
            setMessageColor(false);

        } else if (cars.some((car) => car.plateNumber === plateNumber)) {

            setMessage("La placa del automovil ya existe");
            setMessageColor(false);

        } else {

            const car = { plateNumber, brand, state: true };
            setCars([...cars, car]);
            clearInputs();
            setMessage("Automovil agregado con exito");
            setMessageColor(true);
        }
    };

    const clearInputs = () => {
        setPlateNumber("");
        setBrand("");
    };

    return (

        <View style={car_style.container}>

            <View style={car_style.form_container}>

            <Text style={car_style.title}>Registrar un carrito uwu</Text>

                <View style={car_style.input_container}>

                    <Text style={car_style.input_text}>Numero de placa</Text>

                    <TextInput 
                        style={car_style.input}
                        onChangeText={(text) => setPlateNumber(text)}
                        value={plateNumber}
                    />

                    <Text style={car_style.input_text}>Marca del vehiculo</Text>

                    <TextInput 
                        style={car_style.input}
                        onChangeText={(text) => setBrand(text)}
                        value={brand}
                    />    

                </View>

                <View style={car_style.button_container}> 

                    <View style={car_style.row_button_container}>

                        <Button
                            style={{...car_style.button, backgroundColor: 'gray'}}
                            textColor="#ffffff"
                            onPress={saveCar}
                        >
                            Guardar
                        </Button>

                        <Button
                            style={{...car_style.button, backgroundColor: 'gray'}}
                            textColor="#ffffff"
                            onPress={() => navigation.navigate('CarList', setMessage(""))} 
                        >
                            Ver lista
                        </Button>      

                    </View>           

                    <Button
                        style={car_style.button}
                        textColor="#ffffff"
                        onPress={() => navigation.navigate('Rent', setMessage(""))} 
                    >
                        Rentar un vehiculo
                    </Button>   

                    <Button
                        style={car_style.button}
                        textColor="#ffffff"
                        onPress={() => navigation.navigate('Login',  setMessage(""))}
                    >
                        Cerrar sesión
                    </Button>

                </View>

            <Text style={[car_style.message, {color: messageColor ? 'green' : 'red'}]}>{message}</Text> 

            </View>

        </View>

    )
};
