import React from 'react';
import { StyledButton, StyledText } from './styles';

export default function Button(props) {
  var buttonStyle = {};
  if(props.buttonColor) {
    buttonStyle = {backgroundColor: props.buttonColor}
  }
  return (
    <>
      <StyledButton style={buttonStyle} onPress={props.onPressButton}>
        <StyledText>{props.children}</StyledText>
      </StyledButton>
    </>
  );
}