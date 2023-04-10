import Logo from './Logo'
import styled from 'styled-components';

export default function Header(){
  return(
    <ChamelodyHeader>
      <Logo />
    </ChamelodyHeader>
  )
}

const ChamelodyHeader = styled.header`
  position: absolute;
  height: 8vh;
  display: inline-block;
`
