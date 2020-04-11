import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from "./UserPageTemplate";
import PhotoWrapper from "../components/PhotoWrapper/PhotoWrapper";
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledGrid = styled.div`
  display: grid;
  width: 80vw;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;


const GridTemplate = ({cards}) => (
    <UserPageTemplate>
        <StyledWrapper>
            <StyledGrid>
                {cards.map((card) => {
                    console.log(card)
                    return (<PhotoWrapper key={card.id} card={card} />)
                })}
            </StyledGrid>
        </StyledWrapper>
    </UserPageTemplate>
)

GridTemplate.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            imageUrl: PropTypes.string,
            fullsizeUrl: PropTypes.string,
            autor: PropTypes.string,
            tags: PropTypes.array,
        }),
    ),
};

GridTemplate.defaultProps = {
    cards: [],
};

export default GridTemplate;
