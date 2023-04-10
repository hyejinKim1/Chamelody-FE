import ImageLogo from '../components/utils/ImageLogo'
import TextLogo from '../components/utils/TextLogo'
import styled from 'styled-components';

export default function Loading(){
  return(
    <LoadingWrapper>
      <ImageLogo />
      <TextLogo />
    </LoadingWrapper>
  )
}

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`
