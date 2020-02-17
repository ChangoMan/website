module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  extends: [`airbnb`, `react-app`, 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  }
};
