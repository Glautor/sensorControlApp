import React from 'react';
import { PanelStyle, TitleStyle, Container } from './styles';

export default function Panel(props) {
  return (
    <Container>
        <TitleStyle>{props.title.toUpperCase()}</TitleStyle>
        <PanelStyle>
        {props.children}
        </PanelStyle>
    </Container>
  );
}
