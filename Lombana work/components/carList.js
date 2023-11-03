
import React from "react";

import { Button } from "react-native-paper";
import { View, Text, ScrollView } from "react-native";

import { useNavigation } from '@react-navigation/native';

import { list_style } from "../assets/css/list_styles";

import { useAppContext } from "../AppContexts";

export default function CarListScreen() {

    const { cars } = useAppContext();

    const navigation = useNavigation();

    return (

        <View style={list_style.container}>

            <View style={list_style.button_container}> 

                <Button
                    style={list_style.button}
                    textColor="#ffffff"
                    onPress={() => navigation.navigate('Car')}
                >
                    Volver
                </Button>

            </View>

            <ScrollView contentContainerStyle={list_style.scrollview_container}>

                {cars.length > 0 ? (

                    cars.map((car, index) => (

                        <View key={index} style={list_style.list_container}>

                            <Text style={list_style.list_text}>Placa vehiculo: {car.plateNumber}</Text>
                            <Text style={list_style.list_text}>Marca vehiculo: {car.brand}</Text>
                            <Text style={{...list_style.list_text, color: car.state ? 'green' : 'red' }}>
                                Estado: {car.state ? "disponible" : "no disponible"}
                            </Text>

                        </View>

                    ))

                ) : (

                    <Text style={list_style.list_text}>No hay automóviles registrados</Text>

                )}

            </ScrollView>

        </View>
    );
};
