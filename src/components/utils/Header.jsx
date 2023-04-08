import Logo from './Logo'
import styled from 'styled-components';

const ChamelodyHeader = styled.header`
position: absolute;
height: 8vh;
display: inline-block;
`

export default function Header(){
  return(
    <ChamelodyHeader>
      <Logo />
    </ChamelodyHeader>
  )
}
