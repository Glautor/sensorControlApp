import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Alert } from 'react-native';

import Button from '../../components/Button';
import Led from '../../components/Led';
import Panel from '../../components/Panel';
import ButtonConnection from '../../components/ButtonConnection';
import ButtonSound from '../../components/ButtonSound';

import ufcLogo from '../../../assets/ufc-logo.png'

import { Container,
         Block, 
         LeftBlock, 
         RightBlock, 
         TopBlock, 
         BottomBlock, 
         ImageStyle,
         PanelText,
         WifiBlock } from './styles';

export default function Comunication() {
  const [ledVerde, setLedVerde] = useState('#F9FAFB');
  const [ledVermelho, setLedVermelho] = useState('#F9FAFB');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [connected, setConnected] = useState(false);
  const [connectedColor, setConnectedColor] = useState('#F78080');
  const [soundStatusColor, setSoundStatusColor] = useState('#F78080');
  const [togleSound, setTogleSound] = useState(false);

  eventTemp = () => {
    setTimeout(() => {
      if(connected) handlePanelTempRequest();
      eventTemp();
    }, 5000);
  }
  eventTemp();

  eventHumidity = () => {
    setTimeout(() => {
      if(connected) handlePanelHumidityRequest();
      eventHumidity();
    }, 5000);
  }
  eventHumidity();

  handlePanelTempRequest = () => {
    api.post('/getTemperature', {})
    .then((response) => {
      setTemperature(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handlePanelHumidityRequest = () => {
    api.post('/getHumidity', {})
    .then((response) => {
      setHumidity(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  sendCommand = (text) => {
    try {
      if(connected){
        handleButtonRequest(text);
        handleLedColors(text);
      } else {
        handleALert('Problema de conexão', 'Verifique se a conexão foi bem sucedida');
      }
    } catch(error) {
      handleALert('Erro no servidor', 'O servidor apresentou anomalias');
    }
  }

  handleALert = (title, subtitle) => {
    Alert.alert(
      title,
      subtitle,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      {cancelable: false},
    );
  }

  handleButtonRequest = (text) => {
    api.post('/sendMessage', {
      message: text
    })
    .then((response) => {
      if (response.data != 'success') throw new Error('server error');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleStartConnection = () => {
    api.post('/startConnection', {})
    .then((response) => {
      handleWifiStatus(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleWifiStatus = (status) => {
    if(status == 'success'){
      setConnected(true);
      setConnectedColor('#9BD08E');
    } else {
      setConnected(false);
      setConnectedColor('#F78080');
      handleALert('Erro no servidor', 'O servidor retornou uma resposta diferente da esperada');
    }
  }

  handleTogleSound = () => {
    setTogleSound(!togleSound);
    try {
      if(connected){
        if(togleSound) {
          handleButtonRequest('turnIn');
          handleLedColors('turnIn');
        } else {
          handleButtonRequest('turnOff');
          handleLedColors('turnOff');
        }
      } else {
        handleALert('Problema de conexão', 'Verifique se a conexão foi bem sucedida');
      }
    } catch(error) {
      handleALert('Erro no servidor', 'O servidor apresentou anomalias');
    }
  }

  handleLedColors = (text) => {
    switch(text) {
      case 'LR':
        setLedVermelho('#F44A4A');
        break;
      case 'DR':
        setLedVermelho('#F9FAFB');
        break;
      case 'LG':
        setLedVerde('#6F5');
        break;
      case 'DG':
        setLedVerde('#F9FAFB');
        break;
      case 'LA':
          setLedVerde('#6F5');
          setLedVermelho('#F44A4A');
          break;
      case 'DA':
          setLedVerde('#F9FAFB');
          setLedVermelho('#F9FAFB');
          break;
      case 'turnIn':
          setSoundStatusColor('#6F5');
          break;
      case 'turnOff':
          setSoundStatusColor('#F78080');
          break;
    }
  }

  return (
    <Container>
      <ImageStyle source={ufcLogo}/>
      <Block>
        <LeftBlock>
          <Button onPressButton={() => sendCommand('LG')}>Ligar Verde</Button>
          <Button onPressButton={() => sendCommand('DG')}>Desligar Verde</Button>
          <Button onPressButton={() => sendCommand('LR')}>Ligar Vermelho</Button>
          <Button onPressButton={() => sendCommand('DR')}>Desligar Vermelho</Button>
          <Button onPressButton={() => sendCommand('LA')}>Ligar Todos</Button>
          <Button onPressButton={() => sendCommand('DA')}>Desligar Todos</Button>
        </LeftBlock>
        <RightBlock>
          <TopBlock>
            <Led colorLed={ledVerde}/>
            <Led colorLed={ledVermelho}/>
          </TopBlock>
          <BottomBlock>
            <Panel title={'Temperatura'}>
              <PanelText>{temperature}</PanelText>
            </Panel>
            <Panel title={'Umidade'}>
              <PanelText>{humidity}</PanelText>
            </Panel>
            <WifiBlock>
              <ButtonConnection backColor={connectedColor} pressButton={() => handleStartConnection()}/>
              <ButtonSound backColor={soundStatusColor} pressButton={() => handleTogleSound()}/>
            </WifiBlock>
          </BottomBlock>
        </RightBlock>
      </Block>
    </Container>
  );
}