
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/login';
import Car from './components/car';
import Rent from './components/rent';
import CarList from './components/carList';
import RentList from './components/rentList';

import { AppProvider } from './AppContexts';

const Stack = createNativeStackNavigator();

export default function App() {

    return (

       <NavigationContainer>

            <AppProvider>
                <Stack.Navigator 
                    initialRouteName='Car'
                    screenOptions={{
                        headerShown: false,
                        headerBackVisible: true,
                    }}
                >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Car" component={Car} />
                    <Stack.Screen name="CarList" component={CarList} />
                    <Stack.Screen name="Rent" component={Rent} />
                    <Stack.Screen name="RentList" component={RentList} />
                </Stack.Navigator>

            </AppProvider>

        </NavigationContainer>

    );
};

