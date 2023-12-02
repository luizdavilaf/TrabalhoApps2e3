import React from 'react';
import styled from 'styled-components/native';



const SingleCardContainer = styled.View`  
  background-color: white;
  padding: 0 0 10px 0;
`;

const AllCardContainer = styled.View`  
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  gap: 5px;
  padding: 0 5px;
`;

const CardImage = styled.Image`
  max-width: 100%;
  aspect-ratio: 1;
`;

const CardTitle = styled.Text`
  font-size: 13px;
  margin-bottom: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; 
  max-width: 100%;  
  padding: 0 10px;
`;

const CardPrice = styled.Text`
  font-size: 16px;
  color: red;
  padding: 0 10px;
`;

const Card = ({ product }) => {
    return (
        <SingleCardContainer>
            <CardImage source={product.image} alt={product.title} />
            <CardTitle>{product.title}</CardTitle>
            <CardPrice>{`R$${product.price.toFixed(2).replace(".", ",")}`}</CardPrice>
        </SingleCardContainer>
    );
};

export { Card,  AllCardContainer };