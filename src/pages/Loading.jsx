import ImageLogo from '../components/utils/ImageLogo'
import TextLogo from '../components/utils/TextLogo'
import styled, {keyframes} from 'styled-components';

export default function Loading(){
  return(
    <LoadingWrapper>
      <ImageLogo />
      <TextLogo />
    </LoadingWrapper>
  )
}

const MoveGrad = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top:0;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(50deg, #4e86ee, #1ED760, #bc67ff);
  background-size: 200% 200%;
  opacity: 0.7;
  animation: ${MoveGrad} 5s ease infinite;
`
