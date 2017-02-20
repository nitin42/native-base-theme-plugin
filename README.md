# native-base-theme-plugin 
(yet to be publish on npm)

![](https://raw.githubusercontent.com/nitin42/native-base-theme-plugin/master/Group.png)

> A Babel plugin for React Native that adds native-base-theme import declaration in your `index.ios.js`.

## Install

```
yarn add babel-plugin-native-base-theme-require --dev
```
**Make sure that you have installed [yarn](https://yarnpkg.com) (or use npm) and you are using [native base](http://nativebase.io/) UI.**

## Example
`index.ios.js`

```javascript
import React, { Component } from 'react';
import {AppRegistry, Text} from 'react-native';
import { Container, StyleProvider } from 'native-base';
​
export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Container>
          <Text>Hello World</Text>
        </Container>
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('App', () => learnNative);
```

This will transpiled to,

```javascript
import React, { Component } from 'react';
import {AppRegistry, Text} from 'react-native';
import { Container, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components/index';

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Container>
          <Text>Hello World</Text>
        </Container>
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('App', () => learnNative);
```

## Usage

Add `native-base-theme-require` to your `.babelrc`
```.babelrc
{
  "plugins": ["native-base-theme-require"]
}
```

## Contributing
* Add unit tests for any new or changed functionality
* Fix bugs or issues

## License
MIT
