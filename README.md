# Sensor Control App
Aplicativo desenvolvido para comunicação com backend com o intuito de enviar e receber mensagens de tópicos do protocolo mqtt

## Para integração com o backend, use o servidor node.js do repositório abaixo
https://github.com/Glautor/MqttHttpServer

## Desenvolvimento
O app conta com uma integração http com o servidor, enquanto este se conecta via protocol mqtt com sensores

https://github.com/Glautor/MqttHttpServer

## Imagem

<img src="assets/print_app.jpg?raw=true" alt="drawing" width="250"/>

## Iniciando aplicativo
Foi utilizado expo para o desenvolvimento do app

```bash
  # Instalar dependências:
  $ npm install
  # Inicializar aplicação com expo:
  $ expo start
```

Após isso, o expo vai abrir uma página no seu navegador padrão e será disponibilizado um qr code, escaneie esse qr code pelo aplicativo no expo que deve estar instalado no seu celular e o aplicativo será inicializado
