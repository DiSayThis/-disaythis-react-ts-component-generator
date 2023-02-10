# React Typescript Component Generator

[Original package](https://www.npmjs.com/package/react-typescript-component-generator)
React Typescript Component Generator is a cli for generating react component for typescript based architucture.

## Install

```bash
# Global installation
$ npm install --global react-typescript-component-generator
# Local installation
$ npm install --save-dev react-typescript-component-generator
```

## Usage

`<componentName>` is the name of component that can be with or without directory

eg:

- `src/webparts/webpartName/components/ComponentName`

  this will generate component named _`ComponentName`_ in the directory _`./src/webparts/webpartName/components/ComponentName`_

- `ComponentName`

  this will generate component named _`ComponentName`_ in the directory _`./ComponentName`_

  ### Generate React Stateless Component with css modules

```bash
$ grc cssStatelessComponent <componentName>
# or
$ grc m <componentName>
```

### Generate React Stateless Component scss

```bash
$ grc statelessComponent <componentName>
# or
$ grc s <componentName>
```

### Generate React Class Component scss

```bash
$ grc classComponent <componentName>
# or
$ grc c <componentName>
```

### Generate React Redux Container Component scss

```bash
$ grc containerComponent <componentName>
# or
$ grc r <componentName>
```
