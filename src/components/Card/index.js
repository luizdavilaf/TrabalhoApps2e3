import React from 'react';
import styled from 'styled-components/native';



const SingleCardContainer = styled.View`  
background-color: white;
  margin: 2px;
  width: 49%; 
  
`;

const AllCardContainer = styled.View`  
  flex-direction: row;
  flex-wrap: wrap;  
  width: 100%;

`;

const CardImage = styled.Image`
  max-width: 100%;
  aspect-ratio: 1;
`;

const CardTitle = styled.Text`
  font-size: 13px;
  margin-bottom: 8px;
`;

const CardPrice = styled.Text`
  font-size: 16px;
  color: red;
`;

const Card = ({ product }) => {
    return (
        <SingleCardContainer>
            <CardImage source={product.image} alt={product.title} />
            <CardTitle>{product.title}</CardTitle>
            <CardPrice>{`R$${product.price.toFixed(2)}`}</CardPrice>
        </SingleCardContainer>
    );
};

export { Card,  AllCardContainer };