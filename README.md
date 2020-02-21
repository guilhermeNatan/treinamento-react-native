# Treinamento React Native
  Guilherme Natan 
  
# Apresentação inicial (conceitos)
## Parte 1
  - Aplicativo nativo x Aplicativo híbridos 
  - State, Props 
  - Diferenças entre React Js e React native
  - Navegação usando react-navigation
  - Flexbox 
  - React native elements
  
## Parte 2
  - Boas práticas de programação
  - React native realmente é nativo 
  - Bridge 
  - APIS de componentes 
  
  
# Configuração de ambiente 
- Instalar o android studio
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
  
  

# Roteiro  
Introducao : 45 min 

1 - PREPARAR AMBIENTE : 20 min  
- instalar o expo cli 
- criar o projeto  
- configurar os celulares na rede 
    
2 - ESTRUTURA E DIFERENCAS BÁSICAS ENTRE RN E RJS:  10 min
- Explicar estrutura de pastas    
- Apresentar diferencas entre RN e RJS 
    - View e Text 
    - RN nao tem DOM
    - Documentação Oficial do RN 
    https://facebook.github.io/react-native/docs/activityindicator
   
3 - HEADER:  45 min 
- Implementar o  header 
- Explicar boas praticas de componentização (props, state)  
- Falar sobre flex-box 

- [Atividade] Implementar o header  

-- FIM DIA 1 

4 - LISTA (50 min)
 - apresentar    https://randomuser.me/api?nat=br&results=5 
 - explico sobre o axios e promises 
    - Axios implementa o metodos http 
    - Promises: Forma de tratar chamadas assincronas 
   ```ecmascript 6
            function getDataFromServer (url) {
              return new Promise((resolve, reject)=>  {
                 setTimeout(() =>{
                    console.log('obtendo dados do servidor'); 
                    resolve({ data: 'Dados do servidor'})
                 },  3000);
              })
            }
            
            
            getDataFromServer('www.api.com')
            .then((response) => console.log(response))
      ```      
    - Estados de uma promise 
        - Resolved:  Quando a promise retorna o resultado
        - Rejected: Quando algo da errado 
        - pending: Quando ela ainda esta executando  
 - Obtenho a lista de usuarios console.log 
 - ComponentDidMount: Chamado quando o componente é montado é pela primeira vez  
    -   Lifecicles; Imagem [Explicacao da chamada assincrona para montar a lista]
 - [Atividade 1] Implementar chamada assincrona ao randouser.me
 
 - [Atividade 2] Implmentar a lista        
        - Criar componentes PeopleListV1 e PeopleListItem     
        
 - Falar sobre key
 - Falar sobre interpolaçao de string (Usar concatenaçao nome e sobrenome como exemplo)  
 - Reapresentar o que foi feito 
 
  [Atividade 3] Estilizar o listItem   sem imagem
   - Exercitar os conceitos do flexbox  
   - Imagem [Como funciona a propriedade flex ]
   
  [Atividade 4 ] Adicionar imagem do usuário 
  
   Tornando as coisas clicaveis TouchableOpacity
   
4.1 REFATORANDO 

  - src/pages/PeopleListPage  
  - Importar o PeopleListPage no App.js

5 - NAVEGACAO    
  - instalar react-navigation e react-navigation-stack 
     ```ignorelang
          yarn add react-navigation react-navigation-stack
  
          expo install react-native-gesture-handler react-native-reanimated reac
          t-native-screens react-native-safe-area-context @react-native-community/masked-view 
    ```
  
  - Cria um componente minimo para tela de detalhes <View>Ola tela</View>
   - StackNavigator é um HOC que injeta a propriedade navigation.navigate()
  - Implementar navegação da lista para tela de detalhes 
  - Configurar novo header 
  - Sobrescrever as propriedades do header 
  - Passagem de parametros de uma pagina pra outra 
  [Atividade] Implementar navegacao 


6 - TELA DE DETALHES

 [Atividade] Implementar tela de detalhes 
 - Imagem
 - Linha 
 
 
 - Implementar  Scroolview e depois o Flatlist na tela de pessoas 
 [ATividade ] Implementar scroolview na tela de detalhes 


Implementar o loading ActivityIndicator



5 - [Atividade - Desafio] Eles montam a tela de login 
TODO: QUEBRAR EM MAIS ATIVIDADES 


##Referências 

    - Documentação Oficial do RN 
    https://facebook.github.io/react-native/docs/getting-started
    
    - Game para treinar as propriedades do flexbox
    https://flexboxfroggy.com/
    
    - Guia de propriedades do flexbox
    https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    
    - Seção sobre flexbox no site oficial do RN  
    https://facebook.github.io/react-native/docs/flexbox
    
    -React navigation
    https://reactnavigation.org/docs/en/getting-started.html
  
  
## Buscando dados de uma api 
   https://randomuser.me/api?nat=br&results=5
   instalando a dependencia do axios 
   
   ```yarn add axios```
   
   requisicões assíncronas 
     
   
# Desafios
 - Estilizar a lista 
 - Implementar a segunda tela 
 - Implementar tela de login com simulação de autenticacao
 - Refatorar seguindo boas práticas
 - Implementar utilizando a lib react-native-elements
 
 
