import React from 'react';
import styled from 'styled-components';

// Resources
import NoImage from '../Images/NoImage.png';

const BookItem = styled.li`
    list-style: none;
    display: flex;
    margin: 10px 0;
`;

const BookInfo = styled.div`
    margin-left: 15px;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
`;

const BookName = styled.span`
    font-size: 18px;
    font-weight: bold;
`;

const BookDesc = styled.p`
    height: 75px;
    font-size: 14px;
    overflow: hidden;
`;

const Book = ({ imgURL=NoImage, name='도서명', desc='도서 설명', writer='작가명', publisher='출판사', price='정가', salePrice='판매가'  }) => {
    return (
        <>
            <BookItem>
                <img style={{width: '140px', height: '180px'}} src={imgURL} alt='도서 이미지' />
                <BookInfo>
                    <BookName>{ name }</BookName>
                    <BookDesc>{ desc }</BookDesc>
                    <span>{writer} | {publisher} | {price} | {salePrice }</span>
                </BookInfo>
            </BookItem>
            <hr style={{border: '1px solid #eeeeee'}} />
        </>
    );
};

export default Book;