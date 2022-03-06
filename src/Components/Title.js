import React from 'react';
import styled from 'styled-components'

const TitleText = styled.h1`
    font-size: 28px;
    font-weight: bold;
`;

const Title = () => {
    return <TitleText>카카오 도서 검색</TitleText>
};

export default Title;