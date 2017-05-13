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

Also we should add below config into `.babelrc` in the root of project
```json
{
  "presets": [["es2015", { "modules": false }], "react"],
}
```
> `"modules": false` turn off transpliting the `import/export` ES6 syntax into CommonJS `require` syntax. Because Webpack 2 already support ES6 `import/export` syntax.
