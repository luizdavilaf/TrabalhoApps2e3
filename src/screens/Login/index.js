
import { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";
import { TextInput } from "react-native-web";
import { AuthContext } from "../../contexts/auth/auth";
import iconPng from '../../../assets/logoshopee.png';
import iconFacebook from '../../../assets/facebook.png';
import iconGoogle from '../../../assets/google.png';
import usersvg from '../../../assets/user.svg';
import arrowleft from '../../../assets/arrow-left.svg';
import locksvg from '../../../assets/lock.svg';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import plus from '../../../assets/plus-circle.svg';
import help from '../../../assets/help-circle.svg';
import Cadastrar from '../Signup/index';
import { useNavigation } from '@react-navigation/native';

//https://shopee.com.br/seller/login?next=https%3A%2F%2Fseller.shopee.com.br%2F

export default function Login(props) {
    const navigation = useNavigation();

    const { signIn } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    

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
        <Container>
            <HeaderStack>
                <Arrow source={arrowleft} />
                <HeaderText>
                    Entre
                </HeaderText>
                <ContainerIconsHeader>
                    <ImgLogo source={plus} />
                    <ImgLogo source={help} />
                </ContainerIconsHeader>
            </HeaderStack>

            <Form>
                <ImageContainer>
                    <Logo source={iconPng} />
                </ImageContainer>


                <InputContainer>

                    <Icon source={usersvg} />
                    <StyledTextInput
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Digite seu username"
                    />
                </InputContainer>

                <InputContainer>
                    <Icon source={locksvg} />
                    <StyledTextInput
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        placeholder="Digite sua senha"
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons
                            name={showPassword ? 'ios-eye-off' : 'ios-eye'}
                            size={24}
                            color="#888"
                            style={{ marginRight: 10 }}
                        />
                    </TouchableOpacity>
                    <Separator>|</Separator>
                    <ForgotPasswordLink >
                        Esqueceu?
                    </ForgotPasswordLink>
                </InputContainer>

                <StyledButton
                    disabled={!username || !password}
                    onPress={() => {
                        fazLogin();
                    }}
                >
            <ButtonText disabled={!username || !password}>Entre</ButtonText>
                </StyledButton>
                <ContainerWithSMS>
                    <LoginwithSMS >
                        Fazer login com SMS
                    </LoginwithSMS>
                </ContainerWithSMS>
                <ContainerOtherSigns>
                    <SeparatorContainer >
                        <SeparatorLine />
                        <SeparatorText >OU</SeparatorText >
                        <SeparatorLine />
                    </SeparatorContainer >
                    <ContainerLogs>
                        <IconLogs source={iconFacebook} />
                        <LoginText>
                            Entrar com Facebook
                        </LoginText>
                    </ContainerLogs>
                    <ContainerLogs>
                        <IconLogs source={iconGoogle} />
                        <LoginText>
                            Entrar com Google
                        </LoginText>
                    </ContainerLogs>
                </ContainerOtherSigns>
            </Form>

            <ContainerFooter>
                <FooterText>Ainda não tem uma conta?
                    <Separator></Separator>
                    <Signup onPress={() => navigation.navigate('Cadastrar')}>
                        Cadastrar
                    </Signup>
                </FooterText>
            </ContainerFooter>
        </Container>
    );
}

const Container = styled.View`
  
  background-color: #fff;
      position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: scroll;
    margin-bottom: 0;
    
            
  
`;

const Logo = styled.Image`
      height: 55px;
    width: 55px; 
  
`;

const ImageContainer = styled.View`
      padding: 2.5rem 0 1.875rem;
      width: 100%;
      align-items: center;
`;

const ContainerIconsHeader = styled.View`        
      flex-direction: row;
      right: 5px;
      margin: 15px;
      align-items: center;
      
`;

const ImgLogo = styled.Image`
      height: 25px;
    width: 25px; 
    margin-left: 10px;
  
`;


const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #ccc;
  margin-bottom: 10px;
   width: 100%;
`;

const Icon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const StyledTextInput = styled.TextInput`
font-size: 1rem;
  flex: 1;
  height: 40px;
  color: #ccc;
  padding: 8px;
`;


const StyledButton = styled.TouchableOpacity`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#ee4d2d')};
   
  padding: 10px 15px;  
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  width: 100%;
  text-align: center;
`;

const ButtonText = styled.Text`
  color: ${({ disabled }) => (disabled ? "#00000042" : '#fafafa')}; 
  font-size: 16px;
  width: 100%;
  text-align: center;
  
`;

const Separator = styled.Text`
  margin: 0 5px;
  color: #888;
`;




const ForgotPasswordLink = styled.Text`
  color: #007bff;  
  margin-right: 10px;     
`;


const LoginwithSMS = styled.Text`
  color: #007bff;  
  margin-right: 10px;
  text-align: right;  
  
 
      
       
  
`;

const ContainerWithSMS = styled.View`
   flex:1;
   height: 48px; 
  width: 100%; 
  margin-botton: 25px;   
  margin-top: 15px;
  
  
  
  
  
`;

const ContainerFooter = styled.View`
  width: 100%;
  height: 50px;
  color: rgba(0,0,0,.54);
  background-color: #fafafa;
  justify-content: center;
  align-items: center;
`;

const Signup = styled.Text`
  color: #007bff;  
`;

const FooterText = styled.Text`
text-align: center;  
color: rgba(0,0,0,.54);
`

const HeaderStack = styled.View`
  top: 0;
  left: 0;
  right: 0;
  height: 2.75rem;
  width: 100%;
  background-color: #fafafa;
  color: rgba(0,0,0,.54);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const HeaderText = styled.Text`
  flex-grow: 1;
  flex-shrink: 1;
  font-size: 1.25rem;
    color: rgba(0,0,0,.87);
`;

const Arrow = styled.Image`
  width: 40px;
  height: 40px;
  
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

const ContainerOtherSigns = styled.View`
position: absolute;

  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
 
  
`;

const SeparatorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 70%;
   margin-botton: 20px;
`;

const SeparatorLine = styled.View`
  flex: 1;
  height: 2px;  
  background-color: #ccc;
  margin-horizontal: 10px;
 
`;

const SeparatorText = styled.Text`
  margin-horizontal: 10px;  
  color: rgba(0,0,0,.87);
  margin-botton: 15px;
`;

const ContainerLogs = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 15px;  
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 90%;
  text-align: center;
  border: 1px solid rgba(0,0,0,.26);
      
`;


const LoginText = styled.Text`
  margin-horizontal: 10px;  
  flex: 1;
  color: rgba(0,0,0,.87);
  text-align: center;
`;

const IconLogs = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 0px;
`;