import { useState } from 'react'
import styled from 'styled-components'
import SearchResult from './SearchResult';

export default function SearchMusic({ visible, token }) {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const searchBtnClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${search}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setResult(data.tracks.items);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SearchWrapper height={visible}>
      <Search>
        <Input value={search} onChange={handleInputChange} />
        <SearchBtn onClick={searchBtnClick} />
      </Search>
      {result && <SearchResult result={result}/>}
    </SearchWrapper>
  )
}

const SearchWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  max-height: ${props => props.height};
  transition: all 0.7s;
`

const Search = styled.div`
  display: inline-block; 
  width: 100%;
  text-align: center;
  margin-bottom: 5px;
`

const Input = styled.input.attrs({
  type: "text",
  placeholder: "Search"
})`
  width: 70%;
  border: 0.15vw solid black;
  border-radius:10vw;
  padding: 0.5vw;
`

const SearchBtn = styled.img.attrs({
  src: `img/button/SearchBtn.svg`,
  alt: "search",
})`
  width: 1vw;
  cursor: pointer;
  margin: 0.5vw;
  margin-bottom: -0.3vw;
`