## para buildar a lib
ng build

## Para desenvolvimento, adicionar o watch para que as mudanças feitas na LIB aconteçam em tempo real em quem estiver usando
ng build tudu-components --watch

## instalar a lib no MFE que quer usar: 
npm i C:\Users\user\Documents\Frontend\tudü\tudu-workspace\dist\tudu-components\tudu-components-0.0.1.tgz --force

## Gerar nova versão na pasta dist:
cd dist/tudu-components
npm pack

## Depois no MFE rodar o comando de instalação com o caminho do pack gerado na dist
npm install C:\Users\user\Documents\Frontend\tudü\tudu-workspace\dist\tudu-components\tudu-components-0.0.0-watch+1763071281280.tgz --force


## Fluxo para desenvolver atualizando em tempo real essa lib dentro do mfe
- cd C:\Users\user\Documents\Frontend\tudü\tudu-workspace
- ng build tudu-components --watch

# Em outro terminal, na pasta dist
cd dist/tudu-components
npm link

# No MFE :
cd C:\Users\user\Documents\Frontend\tudü\mfe-tudu-professional (pasta-raiz-do-projeto)
npm link tudu-components