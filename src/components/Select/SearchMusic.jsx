import { useState, useEffect } from 'react'
import styled from 'styled-components'
import SearchResult from './SearchResult';
import { BiSearchAlt } from "react-icons/bi";

export default function SearchMusic({ visible, token, xDelete }) {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState();
  const [searchBar, setSearchBar] = useState(true);

  const hideSearchBar = () => {
    setSearchBar(false);
  };

  const showSearchBar = () => {
    setSearchBar(true);
  };

  useEffect(() =>{
    if(visible === "0"){
      setSearch("");
    }
  },[visible]);

  useEffect(() =>{
    if(xDelete){
      setResult(null);
      showSearchBar();
    }
  },[xDelete]);

  const handleInputChange = async (e) => {
    setSearch(e.target.value);
    if(e.target.value === ""){
      setResult(null);
    }else{
      try {
        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${e.target.value}`, {
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
  };

  return (
    <SearchWrapper height={visible}>
      {searchBar &&
        <Search>
          <ImgBox>
            <BiSearchAlt size={"2.2vh"} />
          </ImgBox>
          <Input value={search} onChange={handleInputChange} />
        </Search>
      }
      {result && <SearchResult result={result} showSearchBar={showSearchBar} hideSearchBar={hideSearchBar} visible={visible}/>}
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
  position: relative;
  display: flex;
  align-items: center;
  border: 0.4vh solid black;
  border-radius: 5vh;
  overflow: hidden;
  max-width: 90%;
  margin: 0 auto;
  margin-top: 2vh
`

const Input = styled.input.attrs({
  type: "text",
  placeholder: "Choose a song you listen to when you feel the above"
})`
width: 100%;
display: block;
padding: 0.5vh 0.5vh;
padding-left: 3.3vh;
border: 0;
outline: 0;
font-size: 1.8vh;
`

const ImgBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1vh;
  display: flex;
  align-items: center;
  svg {
    fill: black;
  }
`;