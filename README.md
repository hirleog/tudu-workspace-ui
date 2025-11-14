### Fluxo de BUILD para gerar o pacote .tgz usando npm pack (gera o .tgz): ###
cd C:\Users\user\Documents\Frontend\tudü\tudu-workspace
ng build tudu-components
cd dist/tudu-components
npm pack

### Fluxo para desenvolver atualizando em tempo real essa lib dentro do mfe ###
- cd C:\Users\user\Documents\Frontend\tudü\tudu-workspace
- ng build tudu-components --watch

# Em outro terminal, na pasta dist
cd dist/tudu-components
npm link

# No MFE :
cd C:\Users\user\Documents\Frontend\tudü\mfe-tudu-professional (pasta-raiz-do-projeto)
npm link tudu-components
npm run start

