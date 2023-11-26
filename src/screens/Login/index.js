
import { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-web";
import { AuthContext } from "../../contexts/auth/auth";

export default function Login(props) {

    const { signIn } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log('Mounting Login');
        return () => {
            console.log('Unmounting Login');
        }
    }, []);

    const fazLogin = () => {
        console.log('Fazendo login com usename: ' + username + ' e senha: ' + password);
        signIn(username, password);
    };

    return (
        <View /* style={styles.container} */>
            <Text> Tela de Login</Text>
            <Text>Informe seu username</Text>
            <TextInput value={username} onChangeText={setUsername} />
            <Text>Informe sua senha</Text>
            <TextInput value={password} onChangeText={setPassword} />

            <Button title="Login" 
                onPress={() => {
                    fazLogin();
                }}
            />
            
        </View>
    );
}

/* const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }); */