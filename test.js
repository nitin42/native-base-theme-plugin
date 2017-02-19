'use strict';

const babel = require('babel-core');
const assert = require('assert');

const native_plugin = require('./index');

let transform;

describe('native-base-theme-plugin', () => {
  beforeEach(() => {
  	transform = code => babel.transform(code, {
  		plugins: [native_plugin, 'transform-react-jsx']
  	}).code;
  });

  it('adds import statement if Identifier getTheme is present', () => {
  	const transformed = transform(`React.createElement(StyleProvider, { style: getTheme() });`);

  	assert.equal(`import getTheme from "./native-base-theme/components/index";
React.createElement(StyleProvider, { style: getTheme() });`, transformed);
  });
});
