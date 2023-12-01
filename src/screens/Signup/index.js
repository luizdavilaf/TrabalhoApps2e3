// Importações necessárias

import styled from 'styled-components/native';
import { useContext, useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";
import { TextInput } from "react-native-web";
import { Ionicons } from '@expo/vector-icons';
import iconPng from '../../../assets/logoshopee.png';

// Componente principal
const SignUpForm = () => {
    const navigation = useNavigation();
    // Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        evaluations: 4.9,
        followers: 794,
        image: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    // Função para lidar com as mudanças nos campos do formulário
    const handleChange = (name, value) => {       
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async() => {
        try {
            const response = await api.post('/noauth/merchants/', formData);
            
        } catch (error) {
            
        }
        console.log('Dados do formulário enviados:', formData);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <ImageContainer>
                    <Logo source={iconPng} />
                </ImageContainer>
                <InputContainer>
                    <StyledTextInput
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChangeText={(value) => handleChange("name", value)}
                        placeholder="Nome do estabelecimento"
                        required
                    />
                </InputContainer>
                <InputContainer>
                <StyledTextInput
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                        onChangeText={(value) => handleChange("username", value)}
                    placeholder="Username"
                    required
                />
                </InputContainer>
                <InputContainer>
                <StyledTextInput
                    type="password"
                    id="password"
                    name="password"
                        secureTextEntry={!showPassword}
                    value={formData.password}
                        onChangeText={(value) => handleChange("password", value)}
                    placeholder="Senha"
                    required
                />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons
                            name={showPassword ? 'ios-eye-off' : 'ios-eye'}
                            size={24}
                            color="#888"
                            style={{ marginRight: 10 }}
                        />
                    </TouchableOpacity>
                </InputContainer>
                <InputContainer>
                <StyledTextInput
                    type="text"
                    id="image"
                    name="image"
                    value={formData.image}
                        onChangeText={(value) => handleChange("image", value)}
                    placeholder="url imagem"
                    required
                />
                </InputContainer>
                <StyledButton type="submit" disabled={!formData.username || !formData.password || !formData.name}
                    onPress={() => {
                        cadastrar();
                    }}>
                    <ButtonText disabled={!formData.username || !formData.password}>Próximo</ButtonText>
                    </StyledButton>
            </Form>
            <ContainerFooter>
                <FooterText>Ainda não tem uma conta?
                    <Separator></Separator>
                    <Signup onPress={() => navigation.navigate('Login')}>
                        Entre
                    </Signup>
                </FooterText>
            </ContainerFooter>
        </Container>
    );
};


const ContainerFooter = styled.View`
width: 100%;
height: 50px;
color: rgba(0,0,0,.54);
background-color: #fafafa;
justify-content: center;
align-items: center;
`;

const ButtonText = styled.Text`
  color: ${({ disabled }) => (disabled ? "#595959" : '#fafafa')};
  font-size: 18px;
  width: 100%;
  text-align: center;
  
`;
const ImageContainer = styled.View`
      padding: 2.5rem 0 1.875rem;
      width: 100%;
      align-items: center;
`;

const Logo = styled.Image`
      height: 55px;
    width: 55px; 
  
`;
const Signup = styled.Text`
color: #007bff;  
`;

const FooterText = styled.Text`
text-align: center;  
color: rgba(0,0,0,.54);
`
// Estilos usando Styled Components
const Container = styled.View`
fontStyle: "Roboto",
background-color: #fff;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
overflow: scroll;
margin-bottom: 0;
`;

const Form = styled.View`
min-height: calc(100% - 92px);
flex-direction: column;
width: 100%;  
padding: 22px;
justify-content: center;
align-items: center;
display: flex;
`;


const StyledTextInput = styled.TextInput`
font-size: 1rem;
flex: 1;
height: 40px;
color: rgba(0,0,0,.87);
`;



const StyledButton = styled.TouchableOpacity`
background-color: ${({ disabled }) => (disabled ? '#ccc' : '#ee4d2d')};
padding: 10px 15px;  
align-items: center;
justify-content: center;
margin-top: 5px;
width: 100%;
text-align: center;
fontStyle: "Roboto",
`;

const Separator = styled.Text`
margin: 0 5px;
color: #888;
`;

const InputContainer = styled.View`
flex-direction: row;
align-items: center;
border-bottom-width: 1px;
border-color: #ccc;
margin-bottom: 10px;
width: 100%;
`;

// Exportar o componente principal
export default SignUpForm;
