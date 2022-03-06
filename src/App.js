import React, { useState } from 'react';
import styled from 'styled-components'
import axios from 'axios';

// Components
import Search from './Components/Search';
import Title from './Components/Title';
import Book from './Components/Book';

// API 키 설정
const API_KEY = '4e04a059dfd36851f3c98beb77ef4639';

// Create Custom Tags
const SearchContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-bottom: 10px;
`;

const ResultContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
`;

const App = () => {
  // 검색어를 관리할 State
  const [searchValue, setSearchValue] = useState('');

  // 검색된 책 목록을 관리할 State
  const [searchBookList, setSearchBookList] = useState([]);

  // 검색어 입력시 실행될 함수
  const getSearchValue = (value) => { 
    setSearchValue(value);
    axios.get(`https://dapi.kakao.com/v3/search/book?target=title&size=20&query=${value}`, {
      headers: {
        Authorization: `KakaoAK ${API_KEY}`
      }
    })
      .then((res) => {
        setSearchBookList(res.data.documents);
      })
      .catch((err) => console.error(err));
  };

  // 정렬 방식 선택시 실행될 함수
  const getSortingOption = (value) => {
    if (value === 'low-price') setSearchBookList(searchBookList.slice().sort((a, b) => parseFloat(a.sale_price) - parseFloat(b.sale_price)));
    else if (value === 'high-price') setSearchBookList(searchBookList.slice().sort((a, b) => parseFloat(b.sale_price) - parseFloat(a.sale_price)));
  }

  return (
    <>
      {/* 검색창 컨테이너 */}
      <SearchContainer>
        <Title />
        <Search getSearchValue={getSearchValue} getSortingOption={getSortingOption} />
      </SearchContainer>
      {/* 검색 결과 컨테이너 */}
      <ResultContainer>
        {searchBookList.map((book, index) => (
            <Book key={index} imgURL={book.thumbnail} name={book.title} price={book.price} writer={book.authors.join(', ')} publisher={book.publisher} salePrice={book.sale_price} desc={book.contents} />
        ))}
      </ResultContainer>
    </>
  );
}

export default App;