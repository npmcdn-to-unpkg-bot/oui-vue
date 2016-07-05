# oui-vue
> Mobile UI elements for vue.js

- [Homepage](http://oui-vue.github.io)
- [Documentation](http://oui-vue.github.io/docs)

## Installation
```shell
npm i oui-vue -S
```

## Usage

import all components.

```javascript
import Vue from 'vue'
import Oui from 'oui-vue';

Vue.use(Oui);
```

Or import specified component. (Use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component))

```javascript
import { Cell, Checklist } from 'oui-vue';

Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
```


Equal to

```javascript
import Vue from 'vue';
import Oui from 'oui-vue';
import 'oui-vue/lib/style.css';

Vue.use(Oui);

// import specified component

import Radio from 'oui-vue/lib/radio';
import 'oui-vue/lib/radio/style.css';

Vue.component(Radio.name, Radio);
```

## babel-plugin-component
- Auto import css file
- Modular import component

Installation
```shell
npm i babel-plugin-component -D
```

Usage

.babelrc
```json
{
  "plugins": ["other-plugin", ["component", [
    { "libraryName": "oui-vue", "style": true }
  ]]]
}
```

## Development

```shell
npm i cooking -g
make dev
```

## Production
```shell
make dist
```

## Deploy Example
```shell
make deploy
```

## License
MIT
