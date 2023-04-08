import ImageLogo from './ImageLogo'
import TextLogo from './TextLogo'
import styled from 'styled-components';

const LogoBox = styled.div`
height: 7vh;
display: inline-block;
margin-top: 1vh;
`

const LogoBoxItem = styled.span`
margin-left: 0.4vw;
`

export default function Logo(){
  return(
    <LogoBox>
      <LogoBoxItem>
        <ImageLogo size="6vmin"/>
      </LogoBoxItem>
      <LogoBoxItem>
        <TextLogo size="22vmin"/>   
      </LogoBoxItem>
    </LogoBox>
  )
}