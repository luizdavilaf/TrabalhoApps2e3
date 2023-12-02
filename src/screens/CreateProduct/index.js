// Importações necessárias

import styled from 'styled-components/native';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth/auth";
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";
import { TextInput } from "react-native-web";
import { Ionicons } from '@expo/vector-icons';
import iconPng from '../../../assets/logoshopee.png';
import { ErrorToast, SuccessToast } from '../../components/Toast/index.js';
import Loader from '../../components/Loader';
import api from "../../api/api";
import  Toast  from 'react-native-toast-message';
import { fetchCategories } from "../../api/categories.js";
import { Picker } from '@react-native-picker/picker';

// Componente principal
const SignUpForm = () => {
    const navigation = useNavigation();
    // Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        title: '',
        price: null,       
        avaliations: 4.9,
        quantity_sold: 794,
        image: '',
        categoryId: null,
    });

    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);   
    const [categories, setCategories] = useState([]); 
    const [messageResponse, setmessageResponse] = useState("");
    

    // Função para lidar com as mudanças nos campos do formulário
    const handleChange = (name, value) => {       
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const loadData = async () => {
        setLoading(true);
        try {
            const categoriesData = await fetchCategories()
            setCategories(categoriesData.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        console.log('Mounting Register');
        loadData();
        return () => {
            console.log('Unmounting Register');
        }
    }, []);

    const handleShowToast = (message, type) => {
        Toast.show({
            type: type,
            text1: message,
            visibilityTime: 2000,            
            autoHide: true,
           
            
            
        });
    };

   


    // Função para lidar com o envio do formulário
    const cadastrar = async() => {
        let response;
        try {
            setLoading(true);
            response = await api.post('/auth/products/', formData);
           
            handleShowToast("Produto cadastrado com sucesso", "success");

            
            setTimeout(() => {
                navigation.navigate('Home');
            }, 2500);

        } catch (error) {
            console.log(error);            
            handleShowToast(`Erro ao cadastrar produto. ${error.message}`,"error");

        } finally {
            setLoading(false);
            console.log('Dados do formulário enviados:', response, formData);
        }
        
    };

    return (
        
        <Container>
            <div>                
                {loading && <Loader />}
               
            </div>
            <ToastContainer> <Toast /></ToastContainer>
           
            <Form>
                <ImageContainer>
                    <Logo source={iconPng} />
                </ImageContainer>
                <InputContainer>
                    <StyledTextInput
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChangeText={(value) => handleChange("title", value)}
                        placeholder="Nome do produto"
                        required
                    />
                </InputContainer>
                <InputContainer>
                <StyledTextInput
                    type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChangeText={(value) => handleChange("price", value)}
                    placeholder="Preço do produto"
                    required
                />
                </InputContainer>                
                <InputContainer>
                <StyledTextInput
                    type="text"
                    id="image"
                    name="image"
                    value={formData.image}
                        onChangeText={(value) => handleChange("image", value)}
                    placeholder="Url imagem"
                    required
                />
                </InputContainer>
                <InputContainer>
                    <StyledPicker    
                        value={formData.categoryId}                    
                        onValueChange={(itemValue) => handleChange("categoryId", itemValue)}
                    >
                        {categories.map((category) => (
                            <Picker.Item key={category.id} label={category.title} value={category.id} />
                        ))}
                    </StyledPicker>
                </InputContainer>
                <StyledButton type="submit" disabled={!formData.title || !formData.price}
                    onPress={() => {
                        cadastrar();
                    }}>
                    <ButtonText disabled={!formData.title || !formData.price}>Cadastrar</ButtonText>
                    </StyledButton>
            </Form>
            
        </Container>
    );
};


const ToastContainer = styled.View`
 
  z-index: 999; 
`;

const SelectContainer = styled.View`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`;

const StyledPicker = styled(Picker)`
 font-size: 1rem;
flex: 1;
height: 40px;
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
fontStyle: "Roboto";
background-color: #fff;
position: relative;
overflow: visible;
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
padding: 5px;
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
