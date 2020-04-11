import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    text-decoration: none;
    padding: 0;
    background-color: ${({theme}) => theme.primary};
    width: 220px;
    height: 47px;
    //border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    border: 3px black solid;
    //text-transform: uppercase;
   &.active {
  }
`;

export default Button;