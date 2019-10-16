import React from 'react';
import api from '../../services/api';

import Button from '../../components/Button';
import Led from '../../components/Led';
import Panel from '../../components/Panel';

import ufcLogo from '../../../assets/ufc-logo.png'

import { Container, Block, LeftBlock, RightBlock, TopBlock, BottomBlock, ImageStyle } from './styles';

export default function Comunication() {

  sendCommand = (text) => {
    api.post('/sendMessage', {
      message: text
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <Container>
      <ImageStyle source={ufcLogo}/>
      <Block>
        <LeftBlock>
          <Button onPressButton={() => sendCommand('LR')}>Ligar Vermelho</Button>
          <Button onPressButton={() => sendCommand('DR')}>Desligar Vermelho</Button>
          <Button onPressButton={() => sendCommand('LG')}>Ligar Verde</Button>
          <Button onPressButton={() => sendCommand('DG')}>Desligar Verde</Button>
          <Button onPressButton={() => sendCommand('LA')}>Ligar Todos</Button>
          <Button onPressButton={() => sendCommand('DA')}>Desligar Todos</Button>
        </LeftBlock>
        <RightBlock>
          <TopBlock>
            <Led />
            <Led />
          </TopBlock>
          <BottomBlock>
            <Panel title={'Temperatura'} />
            <Panel title={'Umidade'}/>
          </BottomBlock>
        </RightBlock>
      </Block>
    </Container>
  );
}