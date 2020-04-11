import styled from 'styled-components';
import magnifierIcon from '../../assets/magnifier.svg';

const Input = styled.input`
  padding: 15px 30px;
  margin: 0 20px 0 0;
  font-size: ${({theme}) => theme.fontSize.s}        ;
  font-weight: ${({theme}) => theme.regular};
  background-color: ${({theme}) => theme.grey100};
  border-radius: 50px;
  font-size: ${({theme}) => theme.fontSize.xs};
  background-image: url(${magnifierIcon});
  background-size: 15px;
  background-position: 15px 50%;
  background-repeat: no-repeat;
  border: 3px black solid;
`;

export default Input;
