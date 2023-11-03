
import React from "react";

import { Button } from "react-native-paper";
import { View, Text, ScrollView } from "react-native";

import { useNavigation } from '@react-navigation/native';

import { list_style } from "../assets/css/list_styles";

import { useAppContext } from "../AppContexts";

export default function RentListScreen() {

    const { rents } = useAppContext();

    const navigation = useNavigation();

    return (

        <View style={list_style.container}>

            <View style={list_style.button_container}> 

                <Button
                    style={list_style.button}
                    textColor="#ffffff"
                    onPress={() => navigation.navigate('Rent')}
                >
                    Volver
                </Button>

            </View>

            <ScrollView contentContainerStyle={list_style.scrollview_container}>

                {rents.length > 0 ? (

                    rents.map((rent, index) => (

                        <View key={index} style={list_style.list_container}>

                            <Text style={list_style.list_text}>Numero renta: {rent.rentNumber}</Text>
                            <Text style={list_style.list_text}>Numero placa: {rent.plateNumber}</Text>
                            <Text style={list_style.list_text}>Usuario renta: {rent.user}</Text>
                            <Text style={{...list_style.list_text, color: 'green'}}>Rentado el: {rent.rentDate}</Text>

                        </View>

                    ))

                ) : (

                    <Text style={list_style.list_text}>No hay rentas registradas</Text>

                )}

            </ScrollView>

        </View>
    );
};
