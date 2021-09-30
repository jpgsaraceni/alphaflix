import styled from 'styled-components';

export const Container = styled.div`
  color:white;
  height: 100vh;
  display: flex;

  .logo-container {
    position: absolute;
    margin: 20px 0 0 20px;
  }

  .login-container {
    background: rgba(19, 20, 20, 0.75);
    border-radius: 9px;
    width: 27vw;
    margin: auto;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 25px;
    }

    p {
      margin: 20px 0;
      text-align: center;
      font-size: 18px;
      font-weight: 200;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    button:first-of-type {
      background: rgba(28, 161, 113, 1);
      color: rgba(255, 255, 255, 1);
      margin-top: 20px;
    }

    button {
      border: none;
      margin-bottom: 20px;
      height: 40px;
      border-radius: 3px;
    	background: rgba(255, 255, 255, 1);
      color: rgba(28, 161, 113, 1);
      text-transform: uppercase;
      font-size: 18px;
    }

    .error-message {
      text-align: center;
      color: red;
    }
  }
`;