// Loader.js

import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #3498db; /* Blue color for the loader */
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => {
  return <LoaderContainer />;
};

export default Loader;
