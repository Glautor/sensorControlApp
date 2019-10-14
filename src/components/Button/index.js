import React, { useState } from 'react';
import { StyledButton, StyledText, StyledTextInput } from './styles';

import init from 'react_native_mqtt';
import { AsyncStorage } from 'react-native';
 
export default function Button() {
  const [count, setCount] = useState(0);
  const [message, setMesssage] = useState('');
  
  init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: true,
    sync : {
    }
  });
 
  function onConnect() {
    console.log("onConnect");
  }
   
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }
   
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
  }
   
  const client = new Paho.MQTT.Client('host', 'port', 'uname');
  // client.onConnectionLost = onConnectionLost;
  // client.onMessageArrived = onMessageArrived;
  client.connect({ onSuccess:onConnect, useSSL: true });
  
  handlePlusOne = () => {
    setCount(count + 1);
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({ onSuccess:onConnect, useSSL: true });
  }

  handleTextChange = (text) => {
    setMesssage(text);
  }

  return (
    <>
      <StyledTextInput 
        onChangeText={handleTextChange}
        value={message}
        maxLength={10}
      />
      <StyledText>{message}</StyledText>
      <StyledButton onPress={handlePlusOne}>
        <StyledText>ENVIAR</StyledText>
      </StyledButton>
    </>
  );
}
