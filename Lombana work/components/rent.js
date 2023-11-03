
import React, { useState, useEffect } from "react";

import { Button } from "react-native-paper";

import { TextInput, View, Text,Image } from "react-native";

import { useNavigation } from '@react-navigation/native';

import { rent_style } from "../assets/css/rent_styles";

import { useAppContext } from "../AppContexts";

function generateRentNumber(length) {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    let code = '';

    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * characters.length);
        code += characters.charAt(random);
    }

    return code;
};


export default function RentScreen() {

    const { accounts, cars, setCars, rents, setRents } = useAppContext();

    const navigation = useNavigation();
    
    const [rentNumber, setRentNumber] = useState(generateRentNumber(4));

    const [user, setUser] = useState('');
    const [plateNumber, setPlateNumber] = useState('');
    const [rentDate, setRentDate] = useState('');
    const [message, setMessage] = useState(''); 
    const [messageColor, setMessageColor] = useState(false); 

    useEffect(() => {

        const actualDate = new Date();
        const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
        const formatDate = actualDate.toLocaleDateString('es-CO', options);
        setRentDate(formatDate);

    },[]);

    const saveRent = () => {

        const car = cars.find((car) => car.plateNumber === plateNumber);
        const account = accounts.find((account) => account.user === user);

        if (plateNumber === "" || user === "") {

            setMessage("Debes ingresar todos los campos");
            setMessageColor(false);

        } else if (!car) {

            setMessage("El número de placa no existe");
            setMessageColor(false);

        } else if (!account) {

            setMessage("El usuario no existe");
            setMessageColor(false);

        } else if (rents.some((rent) => rent.plateNumber === car.plateNumber)) {

            setMessage("El vehiculo ya fue rentado");
            setMessageColor(false);

        } else if (rents.some((rent) => rent.rentNumber === rentNumber)) {

            setMessage("El numero de la renta ya existe");
            setMessageColor(false);

        } else {

            const updatedCars = cars.map((car) => { 

                if (car.plateNumber === plateNumber) {
                    return {...car, state: false };
                }
                return car;
            });
            
            setCars(updatedCars);

            setRentNumber(generateRentNumber(4));
            
            const rent = { rentNumber: rentNumber, plateNumber: car.plateNumber, user: user, rentDate: rentDate };
            setRents([...rents, rent]);
            clearInputs();
            setMessage("Renta guardada exitosamente");
            setMessageColor(true);

        }
    };

    const clearInputs = () => {
        setPlateNumber("");
        setUser("");
    };

    return (

        <View style={rent_style.container}>
            
            <View style={rent_style.form_container}>

            <Text style={rent_style.title}>RENTAR VEHICULOS</Text>
           
                
                <View style={rent_style.input_container}>

                    <Text style={rent_style.input_text}>Numero de renta</Text>

                    <TextInput 
                        style={rent_style.input}
                        aria-disabled
                        editable={false}
                        value={rentNumber}
                    />

                    <Text style={rent_style.input_text}>Numero de placa</Text>

                    <TextInput 
                        style={rent_style.input}
                        onChangeText={(text) => setPlateNumber(text)}
                        value={plateNumber}
                    />

                    <Text style={rent_style.input_text}>Usuario</Text>

                    <TextInput 
                        style={rent_style.input}
                        onChangeText={(text) => setUser(text)}
                        value={user}
                    />   

                    <Text style={rent_style.input_text}>Fecha de la renta</Text>

                    <TextInput 
                        style={rent_style.input}
                        aria-disabled
                        editable={false}
                        value={rentDate}
                    />    
                    
                </View>

                <View style={rent_style.button_container}> 

                    <View style={rent_style.row_button_container}>

                        <Button
                            style={{...rent_style.button, backgroundColor: '#000000'}}
                            textColor="#ffffff"
                            onPress={saveRent}
                        >
                            Guardar renta
                        </Button>

                         <Button
                            style={{...rent_style.button, backgroundColor: '#000000'}}
                            textColor="#ffffff"
                            onPress={() => navigation.navigate('RentList', setMessage(""))} 
                        >
                            Ver lista
                        </Button>      

                    </View>                         
            
                    <Button
                        style={rent_style.button}
                        textColor="#ffffff"
                        onPress={() => navigation.navigate('Car',  setMessage(""))}
                    >
                        Volver
                    </Button>

                </View>

            <Text style={[rent_style.message, {color: messageColor ? 'green' : 'red'}]}>{message}</Text> 

            </View>

        </View>

    )
    
};