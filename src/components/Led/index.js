import React from 'react';

import { LedStyle } from './styles';

export default function Led(props) {
  var color = '#6F5';
  if(props.colorLed){
    color = props.colorLed;
  }
  return (
    <LedStyle style={{backgroundColor: color}} />
  );
}
