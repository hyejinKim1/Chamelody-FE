import styled from 'styled-components'

export default function SearchMusic({ visible }) {

  const searchClick = () => {

  }

  return (
    <SearchWrapper visible={visible}>
      <Search>
        <Input visible={visible} />
        <SearchBtn visible={visible} onClick={searchClick}/>
      </Search>
    </SearchWrapper>
  )
}

const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  max-height: ${({visible}) => {
    if (visible) {
      return "4.5vw";
    }
    return "0";
  }};
  transition: all 0.7s;
`

const Search = styled.div`
  display: inline-block; 
  width: 100%;
  text-align: center;
`
const SearchExplain = styled.p`
  font-size: 0.8vw;
  font-weight: 400;
`

const Input = styled.input.attrs({
  type: "text",
  placeholder: "Search"
})`
  width: 70%;
  border: 0.15vw solid black;
  border-radius:10vw;
  padding: 0.5vw;
  margin-bottom: 0.5vw;
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