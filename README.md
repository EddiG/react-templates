# React templates
## What
Contains the basic templates with the different sets of libraries for creating the React application
## Why
I wanted to learn deeper how to configure the development environment with Webpack 2, ESLint, Flow, Styled-components and other useful libraries and tools for developing React applications. Yes, I know about [create-react-app](https://github.com/facebookincubator/create-react-app). It is a very nice tool and I looked in it sources for taking some approaches. But for the beginners, it is challenging when you try to understand what happening inside looking at a completed product. Because of this, I split the configuration process to the self-sufficient parts.
## How
The each step of configuration process has been placed in its own branch. The each branch contains working code that can be used as a base for your ideas about how to complete the configuration for your purposes.  
### Steps
- `basic`
  - webpack, webpack-dev-server
  - babel, babel-loader, babel-preset-es2015, babel-preset-react
  - react, react-dom, react-hot-loader
- > [TODO] Extract the adding html-webpack-plugin to `html` branch
- `file-url-css` based on `basic`
  - file-loader, url-loader
  - > [TODO] Add css-loader, style-loader, postcss
- `eslint` based on `file-url-css`
  - eslint, eslint-loader, eslint-import-resolver-webpack, eslint-config-airbnb
- `flow` based on `eslint`
  - flow-bin, babel-eslint  
  
  
Master branch contains configuration that I think useful for creating new React application.
## Use
Clone the repo
```bash
git clone https://github.com/eddig/react-templates.git
```
Switch to the branch that you want
```bash
git checkout [branch you want]
```
Install packages
```bash
yarn install
```
Start development server
```bash
yarn start
```
Open the url `http://localhost:8080` in web browser  

Make production build
```bash
yarn build
```
