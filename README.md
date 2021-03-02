# Wiser Login (React App)
![desktop_1366_768](https://user-images.githubusercontent.com/48551052/109024852-ed1cde80-769c-11eb-9d79-f39b0af68d36.jpg)

Para acessar: https://loginwiser2021.herokuapp.com/


## Objetivo e Funcionamento

Este projeto tem como objetivo cumprir todos os requisitos tecnológicos indicados no Desafio Técnico Login Wiser.

O desafio consiste em criar uma aplicação web de login simples, sem integração com banco de dados (apenas <i>front-end</i>). 

O acesso do usuário deve ser simulado com a leitura de uma API de testes, a qual permite ao desenvolvedor <i>front-end</i> testar os recursos do <i>back-end</i> sem que estes estejam prontos. A API de testes indicada foi a MockAPI (https://mockapi.io/).

O funcionamento do aplicativo deve abarcar a validação de dados (conferência dos campos e-mail e senha), a criação de páginas web seguindo um layout fornecido, a responsividade do layout em desktops, tablets e celulares e o uso de uma <i>stack</i> específica de tecnologias enumeradas abaixo.

O projeto deve contar com as seguintes tecnologias:
1) TypesScript
2) React
3) Hooks
4) Redux
5) Styled Components
6) Axios
7) Nextjs


## Visão Geral 

O Aplicativo React solicitado é um <i>front-end</i> de <i>login</i>, ou seja, uma aplicação web com a funcionalidade principal de autenticar as credenciais de um usuário/aluno (usando e-mail e senha) para permitir seu acesso ao <i>back-end</i> do sistema.

O projeto foi desenvolvido no <b>Visual Studio Code</b> a partir da geração do template <i>create-react-app</i> no <b>Node.js</b>.

O primeiro passo foi criar os arquivos `.tsx` com os componentes do formulário. Depois, a validação de dados foi adicionada (usando <b>Hooks</b>) e testada com três mensagens de erros possíveis. 

Em seguida, a biblioteca <b>Styled Component</b> foi instalada para que todo os estilos ficassem em <b>TypeScript</b>, permitindo apagar do projeto qualquer arquivo `.css`. Usando esta biblioteca o layout do <i>front-end</i> foi ajustado de forma responsiva para desktop, tablet e smartphone.

Na sequência, <b>Redux</b> foi incluído no projeto para controlar os estados da aplicação: usuário autenticado (logado) e usuário não-autenticado (deslogado).

Depois, <b>Axios</b> foi instalado para realizar a consulta com a MockAPI, enviando os dados de acesso e obtendo uma resposta do servidor. Se o ID do usuário é maior do que 0, o login ocorreu com sucesso.

Neste ponto, o software foi documentado e carregado no <b>GitHub</b> e no <b>Heroku</b> para apresentação.  


## Pré-requisitos

Para rodar este projeto vocês precisará ter instalado:
- Node.js
- Visual Studio Code
- GitHub CLI (alternativamente, você poderá baixar os arquivos deste projeto e sobrescrever os arquivos de um novo projeto React App - create-react-app)


## Instalação

Para instalar, baixe todo o conteúdo do repositório ou clone o projeto com o comando abaixo. 
```sh
   $ git clone https://github.com/leapmon/LoginWiser.git
   ```

Em seguida, execute o seguinte comando:

```bash
npm run dev
```

## TypesScript e React

Para utilizar TypeScript e React, usamos o seguinte comando no Node.js:

```sh
   $ npx create-react-app <pasta_que_será_criado_o_projeto> --template typescript
   ```

Após o comando, um novo projeto será criado com todos os arquivos, pastas e configurações do React com TypeScript. Para editar o código-fonte foi usado o Visual Studio Code, que pode ser acessado também pelo Node.js, acessando a pasta (recém-criada no comando acima) com o comando:

```sh
   $ cd <pasta_do_projeto>
   ```

E, por fim, utilize o seguinte comando para abrir o projeto no Visual Studio Code 

```sh
   $ code .
   ```

## Hooks (https://react-hook-form.com/)

A utilização de Hooks aconteceu no arquivo `FormLogin.tsx`, o qual utiliza este recurso para a validação de dados.

Para instalá-lo é necessário o seguinte comando:

```sh
npm install react-hook-form
```

Para tanto, no início do arquivo a biblioteca foi importada:

```
   import { useForm } from "react-hook-form";
   ```

Após isso, um tipo de dados chamado de `UserLogin` foi definido com duas propriedades: `email` e `password`.


```
   type UserLogin = {
    email: string;
    password: string;
   };
   ```

Então, dentro da descrição do componente, adicionamos as funções e os vetores necessários para a validação.

```
   const { register, handleSubmit, errors } = useForm<UserLogin>();
   ```

Em seguida, os dois campos de entrada (<i>input</i>) para o login - e-mail e senha - utilizam a função `required` com o parâmetro `true`, indicando que ambos são campos obrigatórios e alvos da validação de dados.

Assim, os erros de cada campo são capturados e armazenados no  objeto `errors`, o qual é usado para conferir se existe erros e, caso positivo, as mensagens de erro específicas são mostradas no formulário.

Se não existirem erros, a função `handleSubmit` indicará qual o que fazer no evento `onSubmit` do formulário.


## Styled Components (https://styled-components.com/)

Esta biblioteca permite adicionar estilos `CSS` dentro de arquivos em `JavaScript` ou `TypeScript`, sendo este recurso conhecido como `CSS-in-JS`. Com isso, seu projeto não requer nenhum arquivo .css externo, permitindo que tudo seja escrito em JS ou TS, ou seja, a marcação (HTML), o estilo (CSS) e a lógica (JS ou TS).

Para instalar esta biblioteca é preciso rodar o seguinte comando no terminal:

```sh
   $ npm install --save styled-components
   ```

Contudo, atenção nesta parte. Para projetos em TypeScript, é preciso adicionar um recurso extra que define todos os tipos da biblioteca com o seguinte comando:

```sh
   $ npm install --save @types/styled-components
   ```

Feito isso é possível definir componentes visuais que serão usados para criação do layout com `CSS-in-JS` (no caso, em TypeScript).


## Responsividade

O layout fornecido possui regras diferentes conforme o dispositivo utilizado: desktop, tablet ou celular.

Contudo, em todas as versões, é possível definir sua estrutura macro com uma seção (como um container contendo toda a página) que contém duas colunas: `esquerda` e `direita`.

Para desktops, cuja referência de layout foi apresentada na resolução `1366 x 768`, a proporção é de `56%` da largura total para a coluna da esquerda e de `46%` para a `direita`.

Para tablets, a proporção é diferente. A coluna da esquerda possui `42%` e, a da `direita`, `58%`.

Para celulares, as colunas esquerda e direita usamdo `100%` da largura e são `sobrepostas`, sendo a coluna esquerda usada como fundo da coluna direita (que contém o formulário de login).

As diferentes regras foram incorporadas aos arquivos `.ts` usando `media queries` com as larguras máximas definidas a partir do layout fornecido.

Todos os elementos estilizados foram colocados na pasta `page` em `arquivos separados` para uma manutenção ágil, de forma que cada componente visual possui um arquivo associado. Os arquivos também foram numerados para facilitar a visualização da ordem da da hierarquia dos elementos HTML dentro da página de login.


## Redux (https://redux.js.org/)

Normalmente, em sistemas com acesso restrito mediante login, cada página da aplicação usa código para checar se o usuário está logado. Conforme o sistema cresce, essa prática fica trabalhosa e demanda mais manutenção do que o necessário, principalmente se algo na rotina de login mudar e precisar ser modificada em diversos arquivos.

A biblioteca <b>Redux</b> serve para criar estados que são visíveis por todos componentes da aplicação. Para isso, ela trabalha com o conceitos de `reducer`, `store`, `actions` e `provider`.

`Reducer` ou, em português, redutor, é uma função JavaScript (ou em TS) que recebe como argumento o estado atual e um ação e retorna um novo estado.

Um `estado` equivale as informações que a aplicação possui e exibe na tela em um dado momento. Por exemplo, um estado pode ser se o usuário está ou não logado no sistema, representado por uma propriedade como `isLogged`. 

Uma `ação` pode ser um login ou um logout, por exemplo.

Assim, imagine que você está na tela do formulário de login com o estado "usuário deslogado", representado pela propriedade `isLogged = false`.

Então, ao logar, o `redutor` é chamado com o `estado atual` e a ação de `login`.  O resultado é o novo estado que, se o login tiver sido feito com sucesso (validação e autenticação), mostarará a tela de usuário logado com o texto "Login feito com sucesso!".

Para instalar o <b>Redux</b> é preciso adicionar o seguinte comando:

```sh
   $ npm install redux react-redux
   ```

Contudo, neste projeto, usaremos <b>Redux</b> de forma assíncrona, pois quando o usuário envia os dados de acesso (login) é preciso enviar uma requisição para a API e aguardar seu retorno, o qual ocorre em um tempo variável e não de forma imediata com os códigos síncronos.

Portanto, faz-se necessário adicionar um `Middleware` ao software, o qual poderá ser feito após adicionarmos o seguinte recurso:

```sh
   $ npm install --save redux-thunk
   ```

Após a instalação o primeiro passo é importar os recursos instalados:

```
   import { Provider } from "react-redux";
   import { createStore, applyMiddleware } from "redux";
   import thunk from "redux-thunk";
   import reducer from "./store/reducer";
   ```

Depois, os arquivos do redutor (`reducer.ts`) e das ações (`actions.ts`) são criados na pasta `store`. Não é algo obrigatório criar uma pasta com este nome, mas é um padrão recomendado pelos criadores do <b>React</b>, de forma que foi adotado neste projeto.

Em seguida, uma `store` é criada passando como argumento o redutor e o middleware.

```
   const store = createStore(reducer, applyMiddleware(thunk));
   ```

Com este último passo, o componente <App> pode ser encapsulado pelo `Provider` importado.

 <Provider store={store}>
    <App />
  </Provider>

Por fim, a função `connect` serve para conectar todos os componentes que terão acesso aos estados gerenciados pelo <b>Redux</b>.


## Axios (https://www.npmjs.com/package/axios)

Axios é um pacote para Node.js usado para requisições HTTP.

Neste projeto, serve para enviar os dados do formulário de login para a API e obter a resposta dela.

Para instalar o pacote no projeto é preciso adicionar o seguinte comando:

```sh
   $ npm install axios
   ```

Em seguida, foi preciso simular uma API de retorno do login usando o MockAPI.

Idealmente, o retorno da API deve conter um objeto `UserData` completo, com ID, nome, e-mail e todas as demais propriedades que são mostradas no <i>front-end</i>.

Contudo, neste projeto, o retorno simulado foi apenas de um `ID`, sendo que, se este é positivo, significa que o usuário está de fato no banco de dados e que a senha está correta, ou seja, login feito com sucesso. Se o `ID` for zerado, significa que o login falhou, ou por e-mail inexistente ou por senha incorreta.

A resposta simulada é dada pelo seguinte link:

https://60358b2c6496b9001749f0ed.mockapi.io/api/v1/login

Após a validação e a autenticação do usuário, o objeto de retorno pode ser visualizado com sucesso no `Console` do navegador e a página front-end exibe uma mensagem de login feito com sucesso.


## Next (https://nextjs.org/)

Next é um framework que engloba muitos recursos do React para facilitar a vida do programador. Por exemplo, ele facilita as renderizações do lado do cliente e do servidor, as rotas entre as páginas são feitas de um jeito mais intituito e simples e as imagens são otimizadas e exibidas de forma responsiva por este framework.

Para criar um projeto com <b>Next</b> é recomendável usar o template padrão `create-next-app` com o seguinte comando no `Node.js`.

```sh
   $ npx create-next-app <pasta_que_será_criado_o_projeto>
   ```

Após isso, basta acessar a pasta do projeto e abrir o código-fonte da mesma forma que foi feito no template `create-react-app`.

Contudo, para rodar o projeto, no lugar de `npm start`, é preciso utilizar o comando:

```sh
   $ npm run dev
   ```

Você notará que agora, diferentemente da estrutura criada no padrão `create-react-app`, não existe mais o arquivo `index.html` na pasta `public`. Cada página da aplicação equivale a um arquivo em JavaScript (ou TypeScript) que fica dentro da pasta `pages`.

Em seguida, para que o projeto seja feito em TypeScript, é preciso adicionar um arquivo `tsconfig.json` na raiz do projeto.


### `Contato`

E-mail:leandro.monteiro@gmail.com ||
LinkedIN: https://www.linkedin.com/in/leandro-pinho-monteiro-69504b21/
