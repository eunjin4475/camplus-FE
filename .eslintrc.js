module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:prettier/recommended'],
  rules: {
    "react/function-component-definition": [
      2,
      {
          "namedComponents": "arrow-function",
          "unnamedComponents": "arrow-function"
      }
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    "jsx-a11y/label-has-associated-control": [ 2,  // label 문제
      {
        "labelComponents": ["label"],
        "labelAttributes": ["htmlFor"],
        "controlComponents": ["input"]
      }
    ],
    "react/jsx-props-no-spreading": 'off', // ... 사용가능
  },
};
