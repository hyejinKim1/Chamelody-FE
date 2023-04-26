import ImageLogo from './ImageLogo'
import TextLogo from './TextLogo'
import styled from 'styled-components';

export default function Logo() {
  return (
    <LogoBox>
      <LogoBoxItem>
        <ImageLogo size="calc( 3vh + 3vmin )" />
      </LogoBoxItem>
      <LogoBoxItem>
        <TextLogo size="calc( 12vh + 10vmin )" />
      </LogoBoxItem>
    </LogoBox>
  )
}

const LogoBox = styled.div`
  height: 7vh;
  display: inline-block;
  margin-top: 1vh;
  padding-left: 1vh;
`

const LogoBoxItem = styled.span`
  margin-left: 0.6vh;
`