import React from 'react';

import { ButtonConnectionStyle, ImageStyle } from './styles';

import Wifi from '../../../assets/wifi-icon.png'

export default function ButtonConnection(props) { 
  return (
    <ButtonConnectionStyle style={{backgroundColor: props.backColor}} onPress={props.pressButton}>
        <ImageStyle source={Wifi}/>
    </ButtonConnectionStyle>
  );
}
