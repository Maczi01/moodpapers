import styled from 'styled-components';

const ButtonIcon = styled.button`
  color: ${({theme}) => theme.white};
  border: none;
  border-radius: 10px;
  color: ${({theme}) => theme.primary};
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease-in;
  margin: 5px;
  cursor: pointer;
  background-image: url(${({icon}) => icon});
  background-position: 50% 50%;
  background-size: 70%;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.2);
  }
`;

export default ButtonIcon;
