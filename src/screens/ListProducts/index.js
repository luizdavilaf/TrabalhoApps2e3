import { useContext, useEffect, useState } from "react";
import { Button, Dimensions, ScrollView, Text, TextInput, View, TouchableOpacity } from "react-native";
import { Card, AllCardContainer } from "../../components/Card";
import { AuthContext } from "../../contexts/auth/auth";
import { fetchProducts } from "../../api/products";
import { ActivityIndicator } from "react-native-web";
import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import styled2, { keyframes } from 'styled-components';
import moment from "moment/moment";
import arrowleft from '../../../assets/arrow-white.svg';
import filter from '../../../assets/filter.svg';
import dots from '../../../assets/more.svg';
import { useNavigation } from '@react-navigation/native';
import star from '../../../assets/star.png';
//https://shopee.com.br/storemagia16?shop=338226263&tab=1

export default function Home(props) {
    const navigation = useNavigation();
    const [name, setName] = useState('')
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    
    
    // Dimensions.get('window' | 'screen').width|height
    const loadData = async () => {
        setLoading(true);
        try {
            const productsData = await fetchProducts() 
            setProducts(productsData.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        console.log(user)
        console.log('Mounting Home');
        loadData();
        return () => {
            console.log('Unmounting Home');
        }
    }, []);



    return (
        <Container >
            {loading ? <ActivityIndicator /> :
                <>
                    <ParentHeaderStack>
                        <ContainerHeaderContent>
                        <BackgroundImage source={user.image}>
                                <ContainerTransparency>
                            <HeaderStack>
                                <Arrow source={arrowleft} />   
                                        
                                            <StyledTextInput placeholder={user.name}>
                                                
                                            </StyledTextInput>
                                                                        
                                        
                                <ContainerIconsHeader>
                                        <ImgLogo source={filter } />
                                            <ImageButton onPress={() => navigation.navigate('Registrar Produto')}>    <ImgLogo source={dots}  /></ImageButton>
                                </ContainerIconsHeader>
                                
                            </HeaderStack>
                            <ContainterShopInfos>
                                        <ContainterImageShop source={user.image}></ContainterImageShop>
                                        <ContainerShopTexts>
                                            <ShopNameText>{user.name}</ShopNameText>
                                            <ShopActivityText>Ativo há 2 horas atrás</ShopActivityText>
                                            <ShopValuationContainer>
                                                <ShopRatingContainer>
                                                    <StarIcon source={star}></StarIcon>
                                                    <RatingText>{user.avaliations.toString()}/5.0</RatingText>
                                                </ShopRatingContainer>
                                                <Separator>|</Separator>
                                                <FollowersText>
                                                    {user.followers} seguidores               
                                                </FollowersText>
                                            </ShopValuationContainer>

                                        </ContainerShopTexts>
                                        <ContainerShopBottons>
                                            <ContainerBottom>
                                                <ContainerBottomText>
                                                    +Seguir
                                                </ContainerBottomText>
                                                
                                            </ContainerBottom>
                                            <ContainerBottom>
                                                <ContainerBottomText>
                                                    Chat
                                                </ContainerBottomText>
                                            </ContainerBottom>

                                        </ContainerShopBottons>

                            </ContainterShopInfos>
                            </ContainerTransparency>
                        </BackgroundImage>
                        </ContainerHeaderContent>
                    </ParentHeaderStack>
                    <NavBar>
                      <Wrapper>
                            <NavItem onPress={() => navigation.navigate('Registrar Produto')}>Novo Produto</NavItem>
                      </Wrapper>
                      <Wrapper>
                            <NavItem><DivSelected>Categorias</DivSelected></NavItem>
                      </Wrapper>
                      <Wrapper>
                        <NavItem>Categorias</NavItem>
                      </Wrapper>
                    </NavBar>
                    <SubNavBar>
                      <Wrapper2>
                            <SubNavItem>
                                <DivSelected>
                                Popular
                                </DivSelected>
                            </SubNavItem>
                      </Wrapper2>
                      <Wrapper2>
                        <SubNavItem>Mais recente</SubNavItem>
                      </Wrapper2>
                      <Wrapper2>
                        <SubNavItem>Em Destaque</SubNavItem>
                      </Wrapper2>
                      <Wrapper2>
                        <SubNavItem>Preço</SubNavItem>
                      </Wrapper2>
                    </SubNavBar>
                    <ScrollView>
                        <AllCardContainer>
                        
                            {products.map((product, index) => (
                                <Card key={index} product={product} />
                            ))}
                        
                        </AllCardContainer>
                    </ScrollView>
                </>}
        </Container>
    )
}


const Container = styled.View`  
  background-color: #fefefe;
  font-family: Arial;
`;


const Wrapper = styled2.div`
  &:hover ${NavItem} {
    color: #ee4d2d;
    border-bottom: 2px solid #ee4d2d;
  }

`;

const DivSelected = styled2.div`
color: #ee4d2d;  
`;


const StyledTextInput = styled.TextInput`
font-size: 1rem;
padding: 10px;
flex: 1;
height: 40px;
width: 100%;
background-color: rgba(0,0,0,.25);
color: grey;
align-items: center;
  justify-content: center;
`;

const NavBar = styled.View`  
  height: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: rgba(255,87,34,0.1);
`;

const SubNavBar = styled.View`  
  height: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: rgba(255,87,34,0.1);
  margin-bottom: 5px;
`;

const NavItem = styled(TouchableOpacity)`  
  cursor: pointer;
  font-size: 15px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  `;

const Wrapper2 = styled2.div`
  &:hover ${SubNavItem} {
    color: #ee4d2d;
  }
`

const ContainerBottom = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  width: 80px;
`

const ContainerBottomText = styled.Text`
  flex-grow: 1;
  flex-shrink: 1;
  font-size: 1.0rem;
  color: white;
  margin-bottom: 2px;
`

const SubNavItem = styled.View`  
  cursor: pointer;
  font-size: 15px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  `;

const Separator = styled.Text`
  margin: 0 5px;
  font-size: .7rem;
  color: white;
`;

const ShopNameText = styled.Text`
  flex-grow: 1;
  flex-shrink: 1;
  font-size: 1.0rem;
  color: white;   
`;

const RatingText = styled.Text`
  flex-grow: 1;
  flex-shrink: 1;
  font-size: .7rem;
  color: white;
  line-height: 0;
`;

const FollowersText = styled.Text`
flex-grow: 1;
  flex-shrink: 1;
  font-size: .7rem;
  color: white;
  
    
`;

const ShopActivityText = styled.Text`
  flex-grow: 1;
  flex-shrink: 1;
  font-size: .8rem;
  margin-bottom: 3px;
  color: red;
    
`;

const ShopValuationContainer = styled.View`  
  display: flex;
  flex-direction: row;
  width: 100%;
`;


const ShopRatingContainer = styled.View`  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 3px;
    background-color: rgba(0, 0, 0, .15);
    border-radius: 10px;
    padding: 0 5px;
    height: 20px;
    `;

const ContainterShopInfos = styled.View`  
  width: 100%;
  display: grid;
  grid-template-columns: 60px 1fr 90px;
  padding: 15px 10px;
`;

const ContainterImageShop = styled.Image`
  border-radius: 50%;
  height: 60px;
   width: 60px;
   background-color: transparent;
`;

const ContainerShopTexts = styled.View`  
  display: flex;
  flex-direction: column;
  color: white;
  padding: 0 10px;
`;

const ContainerShopBottons = styled.View`  
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StarIcon = styled.Image`
  height: 13px;
  width: 13px;
`;



const ContainerTransparency = styled.View`
background-color: rgba(116, 100, 138, .8); 
height: 100%;
   width: 100%;

`;

const ImageButton = styled(TouchableOpacity)`  
`;

const ContainerHeaderContent = styled.View`  
   height: 100%;
   width: 100%;   
`;

const ParentHeaderStack = styled.View`
  height: 130;
  width: 100%;

  color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderStack = styled.View`

  height: 2.75rem;
  width: 100%;
  padding-top: 10px;
  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.Text`
  flex-grow: 1;
  flex-shrink: 1;
  font-size: 1.25rem;
    color: rgba(0,0,0,.87);
`;

const Arrow = styled.Image`
  width: 30px;
  height: 30px;
  color: white !important
  
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

const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;  
  background: rgba(0, 0, 0, 1)
`;