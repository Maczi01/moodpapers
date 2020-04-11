import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 13px;
  color: ${({theme}) => theme.primary};
  width: 41px;
  height: 41px;
  transition: transform 0.3s ease-out;
  padding: 4px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const IcoButton = () => (
    <Button/>
);


export default IcoButton;
