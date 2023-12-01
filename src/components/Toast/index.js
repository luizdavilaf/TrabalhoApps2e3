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
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 2.5s forwards;
`;

const ErrorToast = styled(ToastContainer)`
  background-color: #ff3333; /* Red for error */
`;

const SuccessToast = styled(ToastContainer)`
  background-color: #00cc00; /* Green for success */
`;

export { ErrorToast, SuccessToast };
