import { useContext, useEffect, useState } from "react";
import { Button, Dimensions, ScrollView, Text, TextInput, View } from "react-native";
import Card from "../../components/Card";
import { AuthContext } from "../../contexts/auth/auth";
import { fetchProducts } from "../../api/products";
import { ActivityIndicator } from "react-native-web";

//https://shopee.com.br/storemagia16?shop=338226263&tab=1

export default function Home(props) {

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
        console.log('Mounting Home');
        loadData();
        return () => {
            console.log('Unmounting Home');
        }
    }, []);

    const goToScreen2 = () => {
        console.log({ navigation: props.navigation })
        props.navigation.navigate('Screen2', { nameT2: name })
    }

    return (
        <View style={{
            padding: 20,
        }}>

            <Text>Benefícios</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                    flexDirection: 'row',

                    // justifyContent: 'space-between',

                }}>
                <Card bgColor="orange"></Card>
                <Card bgColor="salmon"></Card>
                <Card bgColor="pink"></Card>
                <Card></Card>
            </ScrollView>

            <Text>USUARIO LOGADO {user.username}</Text>
            {loading ? <ActivityIndicator /> :
                <>
                    <Text>Lista de usuários</Text>
                    <ScrollView>
                        {products.map((product, index) => (
                            <Text key={index}>{product.title}</Text>
                        ))}
                    </ScrollView>
                </>}
        </View>
    )
}