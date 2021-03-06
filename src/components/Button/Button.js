import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    text-decoration: none;
    padding: 0;
    background-color: ${({theme}) => theme.white};
    width: 220px;
    height: 50px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    border: 3px black solid;
    &.active {
      text-decoration: underline;
    }
`;

export default Button;