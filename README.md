# React templates
## What we need
### Basic
- `webpack` for creating bundles from modules
- `babel-core` for transpliting js code into js code that most of web browsers understand
  - `babel-preset-es2015` for transpliting modern ES6 features (const, arrow functions, rest, spread, and etc)
  - `babel-preset-react` for transpliting JSX syntax (`<App />`)
  - `babel-loader` for integrating babel into webpack
- `react` for developing React application. This is a React framework
  - `react-dom` for connecting React app with the web browser DOM
### Hot Module Replacement
- `webpack-dev-server` for updating the web browser on changes in code
- `react-hot-loader` for supporting the partial update of React components
### HTML Template
- `html-webpack-plugin` for converting template into HTML
