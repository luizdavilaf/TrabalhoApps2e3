import { useContext, useEffect, useState } from "react";
import { Button, Dimensions, ScrollView, Text, TextInput, View, TouchableOpacity } from "react-native";
import { Card, AllCardContainer } from "../../components/Card";
import { AuthContext } from "../../contexts/auth/auth";
import { fetchProducts } from "../../api/products";
import { ActivityIndicator } from "react-native-web";
import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import arrowleft from '../../../assets/arrow-left.svg';
import filter from '../../../assets/filter.svg';
import dots from '../../../assets/more.svg';
import { useNavigation } from '@react-navigation/native';
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
                                    
                                    
                                
                                <HeaderText>
                                    implementar barra de busca
                                </HeaderText>
                                <ContainerIconsHeader>
                                        <ImgLogo source={filter } />
                                            <ImageButton onPress={() => navigation.navigate('Registrar Produto')}>    <ImgLogo source={dots}  /></ImageButton>
                                </ContainerIconsHeader>
                                
                            </HeaderStack>
                            <ContainterShopInfos>
                                        <ContainterImageShop source={user.image}></ContainterImageShop>
                                        <ContainerShopTexts>

                                        </ContainerShopTexts>
                                        <ContainerShopBottons>

                                        </ContainerShopBottons>

                            </ContainterShopInfos>
                            </ContainerTransparency>
                        </BackgroundImage>
                        </ContainerHeaderContent>
                    </ParentHeaderStack>
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
  background-color: #fef6f5;
`;

const ImageButton = styled(TouchableOpacity)`
  
`;

const ContainerTransparency = styled.View`
background-color: rgba(128, 128, 128, 0.5);
height: 100%;
   width: 100%;

`;

const ContainterImageShop = styled.Image`
  border-radius: 50%;
  height: 60px;
   width: 60px;
   background-color: transparent;
`;

const ContainterShopInfos = styled.View`  
  
`;

const ContainerShopTexts = styled.View`  
  
`;

const ContainerShopBottons = styled.View`  
  
`;

const ContainerHeaderContent = styled.View`  
   height: 100%;
   width: 100%;
`;

const ParentHeaderStack = styled.View`
  top: 0;
  left: 0;
  right: 0;
  height: 130;
  width: 100%;
 
  color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderStack = styled.View`
  top: 0;
  left: 0;
  right: 0;
  height: 2.75rem;
  width: 100%;
 
  
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
  width: 40px;
  height: 40px;
  
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
`;