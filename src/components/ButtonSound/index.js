import React from 'react';

import { ButtonSoundStyle, ImageStyle } from './styles';

import Sound from '../../../assets/sound-icon.png'

export default function ButtonConnection(props) { 
  return (
    <ButtonSoundStyle style={{backgroundColor: props.backColor}} onPress={props.pressButton}>
        <ImageStyle source={Sound}/>
    </ButtonSoundStyle>
  );
}
