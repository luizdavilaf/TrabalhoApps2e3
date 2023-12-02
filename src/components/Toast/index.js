import styled, { keyframes } from 'styled-components';


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ToastContainer = styled.div`
position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  position: fixed;  
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 2.5s forwards;
`;

const ErrorToast = styled(ToastContainer)`
  background-color: #ff3333; 
`;

const SuccessToast = styled(ToastContainer)`
  background-color: #00cc00; 
`;

export { ErrorToast, SuccessToast };
