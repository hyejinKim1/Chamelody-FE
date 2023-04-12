import React from 'react';
import Emoji from '../utils/Emoji'
import styled, { keyframes } from "styled-components";

export default function ScrollEmotion() {
  return (
    <ScrollDiv>
      <ScrollWrapper>
        <ScrollPrimary>
          <Emoji emotion="Anger" src="img/emoji/Anger.svg" size="10%" emojiClass="image" />
          <Emoji emotion="Fear" src="img/emoji/Fear.svg" size="7%" emojiClass="image" />
          <Emoji emotion="Lonely" src="img/emoji/LonelyText.svg" size="10%" emojiClass="image" />
          <Emoji emotion="Happiness" src="img/emoji/Happiness.svg" size="7%" emojiClass="image" />
          <Emoji emotion="Love" src="img/emoji/Love.svg" size="10%" emojiClass="image" />
          <Emoji emotion="Normal" src="img/emoji/Normal.svg" size="5%" emojiClass="image" />
          <Emoji emotion="FeelTouch" src="img/emoji/FeelTouchText.svg" size="10%" emojiClass="image" />
          <Emoji emotion="Sadness" src="img/emoji/Sadness.svg" size="8%" emojiClass="image" />
          <Emoji emotion="Relaxation" src="img/emoji/Relaxation.svg" size="6%" emojiClass="image" />
          <Emoji emotion="Nervous" src="img/emoji/NervousText.svg" size="10%" emojiClass="image" />
        </ScrollPrimary>
        <ScrollSecondary>
          <Emoji emotion="Anger" src="img/emoji/Anger.svg" size="10%" emojiClass="image" />
          <Emoji emotion="Fear" src="img/emoji/Fear.svg" size="7%" emojiClass="image" />
          <Emoji emotion="Lonely" src="img/emoji/LonelyText.svg" size="10%" emojiClass="image" />
          <Emoji emotion="Happiness" src="img/emoji/Happiness.svg" size="7%" emojiClass="image" />
          <Emoji emotion="Love" src="img/emoji/Love.svg" size="10%" emojiClass="image" />
          <Emoji emotion="Normal" src="img/emoji/Normal.svg" size="5%" emojiClass="image" />
          <Emoji emotion="FeelTouch" src="img/emoji/FeelTouchText.svg" size="10%" emojiClass="image" />
          <Emoji emotion="Sadness" src="img/emoji/Sadness.svg" size="8%" emojiClass="image" />
          <Emoji emotion="Relaxation" src="img/emoji/Relaxation.svg" size="6%" emojiClass="image" />
          <Emoji emotion="Nervous" src="img/emoji/NervousText.svg" size="10%" emojiClass="image" />
        </ScrollSecondary>
      </ScrollWrapper>
    </ScrollDiv>
  )
}

const ScrollDiv = styled.div`
  opacity: 0.9;
  background-color: rgba(140, 229, 189, 0.2);
  display: flex;
  align-items: center;
  width: 100vw;
  overflow: hidden;
  height: 34vh;
`

const ScrollWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  padding: 2rem 0;
  overflow-x: hidden;
`

const ScrollElement = styled.div`
  width: inherit;
  height: inherit;
  position: absolute;
  left: 0%;
  top: 0%;
  display: flex;
  justify-content: space-around;
  overflow-x: hidden;
`

const primary = keyframes`
  from {
    left: 0%;
  }
  to {
    left: -100%;
  }
`;

const secondary = keyframes`
  from {
    left: 100%;
  }
  to {
    left: 0%;
  }
`;

const ScrollPrimary = styled(ScrollElement)`
  animation: ${primary} 20s linear infinite; 
`

const ScrollSecondary = styled(ScrollElement)`
  animation: ${secondary} 20s linear infinite; 
`