'use strict';

module.exports = {
  root: true,
  extends: ['@viamrobotics/eslint-config/svelte'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  env: {
    browser: true,
    node: true,
  },
};
