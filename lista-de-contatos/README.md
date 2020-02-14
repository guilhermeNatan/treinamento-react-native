#Autor
  Guilherme Natan 
  
# Apresentação inicial (conceitos)
  - Aplicativo nativo x Aplicativo híbridos 
  - State, Props 
  - Diferenças entre React Js e React native
  - Navegação usando react-navigation
  - Flexbox 
  - Dimensions
  - React native elements
  
  
 # Encerramento  
  - Boas práticas de programação
  - React native realmente é nativo 
  - Bridge 
  - APIS de componentes 
  - Hooks
  
  
# Configuração de ambiente 

 - Instalando o expo cli   
   
   ```npm install expo-cli --global```
  
  - Atualizar versão do node se necessário 
  
   ```sudo n stable```
  - Iniciando projeto
 ```  
      expo init lista-de-contatos
      cd lista-de-contatos
      expo start 
```
IDE recomendada Webstorm 
  
# Roteiro de implementação 
##  Explicando código gerado
    App.js 
    Texts e Views 
    Imports (uso de destruction)
        import { Text } from 'react-native' 
        const Text = ReactNative.Text
    Stylesheet
```
<div id="root"> </div>
   
   ReactDOM.render(
     <App />,
     document.getElementById('root')
   );
```
 ## Criando Header 
   - src/components/Header 
   - usar classe (statefull) ou funçao (stateless | Functional)
   - Estilizando o header 
   - explicando  stylesheet 
   - passando props para o header 
   
   ## Lista de pessoas
   criar o componente lista 
   
   ```  {[1,2,3].map(()=><Text>nome</Text>)}```
   
   O que acontece quando não passamos uma key ? 
        
   react não consegue distinguir entre elementos 
   - Desatio: Estilizar a lista 
   
   ## AXIOS - Buscando dados de uma api - PROMISES 
   https://randomuser.me/
   
   
   
   
   
# Desafios
 - Estilizar a lista 
 - Implementar a segunda tela 
 - Implementar tela de login com simulação de autenticacao
 - Refatorar seguindo boas práticas
 - Implementar utilizando a lib react-native-elements
 
 
 
## Dúvidas
pq nao se usa jsx ? 
react native é realmente nativo ? 


