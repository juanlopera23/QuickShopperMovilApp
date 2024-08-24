import React, { useState } from 'react';
import { View, Text, Alert, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyComponent from '../src/Component/TextInput.jsx'; 
import styles from '../src/styles/GlobalStyles.js';

const Login = ({ users }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation(); // Usar useNavigation para obtener la instancia de navegación

    const handleLogin = () => {
        const user = users.find(user => user.email === email);

        if (user) {
            navigation.navigate('Home'); // Navegar a la pantalla de inicio
        } else {
            Alert.alert(
                'User Not Found',
                'The user does not exist. Please check your email or register.',
                [{ text: 'OK' }]
            );
        }
    };

    return (
        <View>
            <Text>LOGIN</Text>
            <MyComponent label="Email" onChangeText={setEmail} />
            <MyComponent label="Password" onChangeText={setPassword} secureTextEntry={true} />

            <Pressable
                onPress={handleLogin} // Llamar a handleLogin en lugar de navegar directamente
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'rgb(0, 0, 0)' : 'brown',
                    },
                    styles.button
                ]}
            >
                {({ pressed }) => (
                    <Text style={styles.buttonText}>
                        {pressed ? 'Pressed!' : 'Login'}
                    </Text>
                )}
            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('Registration')}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'rgb(199, 23, 23)' : 'brown',
                    },
                    styles.button
                ]}
            >
                {({ pressed }) => (
                    <Text style={styles.buttonText}>
                        {pressed ? 'Pressed!' : 'Go to Registration'}
                    </Text>
                )}
            </Pressable>
        </View>
    );
};

export default Login;
