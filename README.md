# react-ui-set

> React UI material

[![NPM](https://img.shields.io/npm/v/react-ui-set.svg)](https://www.npmjs.com/package/react-ui-set)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Node](https://img.shields.io/node/v/:react-ui-set.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-ui-set
```

## Material list

- DropDownProvider -  [Demo](https://zhukyuri.github.io/react-ui-set/)
- (Other in progress)

#### Contents

- [DropDownProvider](#dragdropprovider)
  - [Demo](https://zhukyuri.github.io/react-ui-set/)
  - [Usage](#usage)
    - [Step 1](#step-1)
    - [Step 2](#step-2)
  - [Attributes](#attributes)
  - [Callback](#callback)
    - [cbDragDrop ( recommended for all events )](#cbdragdrop-method-eventelementid-e-currentdragelementid)
    - [cbDragStart](#cbdragstart-method-currentdragelementid-e)
    - [cbDrag](#cbdrag-method-eventelementid-e-currentdragelementid)
    - [onDragEnd](#ondragend-method-eventelementid-e-currentdragelementid)
    - [onDragOver](#ondragover-method-eventelementid-e-currentdragelementid)
    - [onDragEnter](#ondragenter-method-eventelementid-e-currentdragelementid)
    - [onDragLeave](#ondragleave-method-eventelementid-e-currentdragelementid)
    - [onDrop](#ondrop-method-eventelementid-e-currentdragelementid)
  - [Example 1](#example-1)
  - [Changelog](#changelog)
- [License](#license)

- (Other in progress)



# DragDropProvider

This is a React class that has ready methods for use Drag & Drop.

**Standard methods**:
- onDragStart
- onDrag
- onDragEnd
- onDragOver
- onDragEnter
- onDragLeave
- onDrop


**Special method**
- onAllEventDragDrop


## Usage

#### Step 1

Create class Extends from **DragDropProvider**

```jsx
import React from 'react'
import { DragDropProvider } from 'react-ui-set'

class MyComponent extends DragDropProvider {
 . . .
}
```

#### Step 2
Add the required attributes to elements.

```jsx
         <div
            . . .
            data-dragid={'example-id'}            // required
            . . .
            draggable={true}                      // required

            onDragStart={this.onDragStart}        // required
            onDrag={this.onDrag}
            onDragEnd={this.onDragEnd}
            onDrop={this.onDrop}
            onDragOver={this.onDragOver}
            onDragEnter={this.onDragEnter}
            onDragLeave={this.onDragLeave}
          />

```


## Attributes

Attributes table

|Attribute name |Inherited method |Required|Type     |Example    |Description           |
|---------------|-----------------|:------:|:-------:|:---------:|----------------------|
|data-dragid    |-                |required|string   | "main-id" |Unique string         |
|draggable      |-                |required|boolean  | true      |Standard attribute    |
|onDragStart    |this.onDragStart |required|func     |           |React attribute       |
|onDrag         |this.onDrag      |*       |func     |           |React attribute       |
|onDragEnd      |this.onDragEnd   |*       |func     |           |React attribute       |
|onDrop         |this.onDrop      |*       |func     |           |React attribute       |
|onDragOver     |this.onDragOver  |*       |func     |           |React attribute       |
|onDragEnter    |this.onDragEnter |*       |func     |           |React attribute       |
|onDragLeave    |this.onDragLeave |*       |func     |           |React attribute       |


## Callback

Callback table

|Callback name  |Description                                         |
|---------------|----------------------------------------------------|
|cbDragDrop     |Recommended for all events                          |
|cbDragStart    |Need attribute ***onDragStart*** in HTML element    |
|cbDrag         |Need attribute ***onDrag*** in HTML element         |
|cbDragEnd      |Need attribute ***onDragEnd*** in HTML element      |
|cbDrop         |Need attribute ***onDrop*** in HTML element         |
|cbDragOver     |Need attribute ***onDragOver*** in HTML element     |
|cbDragEnter    |Need attribute ***onDragEnter*** in HTML element    |
|cbDragLeave    |Need attribute ***onDragLeave*** in HTML element    |


#### cbDragDrop (method, eventElementId, e, currentDragElementId)
**Recommended for all events**

|Attribute name       |type    |value                                                                       |Description |
|---------------------|--------|:--------------------------------------------------------------------------:|------------|
|method               |string  |"DragStart", "Drag", "DragEnd", "DragEnter", "DragLeave", "DragOver", "Drop"|            |
|eventElementId       |string  |*                                                                           |            |
|e                    |event   |*                                                                           |            |
|currentDragElementId |string  |*                                                                           |            |



#### cbDragStart (method, currentDragElementId, e)

|Attribute name       |type    |value      |Description |
|---------------------|--------|:---------:|------------|
|method               |string  |"DragStart"|            |
|currentDragElementId |string  |*          |            |
|e                    |event   |*          |            |


#### cbDrag (method, eventElementId, e, currentDragElementId)

|Attribute name         |type    |value      |Description |
|-----------------------|--------|:---------:|------------|
|method                 |string  |"Drag"     |            |
|eventElementId         |string  |*          |            |
|e                      |event   |*          |            |
|currentDragElementId   |string  |*          |            |


#### onDragEnd (method, eventElementId, e, currentDragElementId)

|Attribute name       |type    |value      |Description |
|---------------------|--------|:---------:|------------|
|method               |string  |"DragEnd"  |            |
|eventElementId       |string  |*          |            |
|e                    |event   |*          |            |
|currentDragElementId |string  |*          |            |


#### onDragOver (method, eventElementId, e, currentDragElementId)

|Attribute name       |type    |value      |Description |
|---------------------|--------|:---------:|------------|
|method               |string  |"DragOver" |            |
|eventElementId       |string  |*          |            |
|e                    |event   |*          |            |
|currentDragElementId |string  |*          |            |


#### onDragEnter (method, eventElementId, e, currentDragElementId)

|Attribute name       |type    |value      |Description |
|---------------------|--------|:---------:|------------|
|method               |string  |"DragEnter"|            |
|eventElementId       |string  |*          |            |
|e                    |event   |*          |            |
|currentDragElementId |string  |*          |            |


#### onDragLeave (method, eventElementId, e, currentDragElementId)

|Attribute name       |type    |value      |Description |
|---------------------|--------|:---------:|------------|
|method               |string  |"DragLeave"|            |
|eventElementId       |string  |*          |            |
|e                    |event   |*          |            |
|currentDragElementId |string  |*          |            |


#### onDrop (method, eventElementId, e, currentDragElementId)

|Attribute name       |type    |value      |Description |
|---------------------|--------|:---------:|------------|
|method               |string  |"Drop"     |            |
|eventElementId       |string  |*          |            |
|e                    |event   |*          |            |
|currentDragElementId |string  |*          |            |


## Example 1
[Demo](https://zhukyuri.github.io/react-ui-set/)


```
  |-App.js
  |-DragDropElements.js
  |-index.css
```

DragDropElements.js

```jsx
import React from 'react'
import { DragDropProvider } from 'react-ui-set'
import PropTypes from 'prop-types'

class DragDropElements extends DragDropProvider {
  render() {
    const {data} = this.props

    return (
      <div>
        {data.map(i => (
          <div
            key={`key-${i.name}`}
            className='bar-el'
            style={{backgroundColor: i.color}}
            data-dragid={i.name}                  // required
            draggable={true}                      // required

            onDragStart={this.onDragStart}        // required
            // onDrag={this.onDrag}
            // onDragEnd={this.onDragEnd}
            // onDrop={this.onDrop}
            onDragOver={this.onDragOver}
            // onDragEnter={this.onDragEnter}
            onDragLeave={this.onDragLeave}
          />
        ))}
      </div>
    )
  }
}

DragDropElements.propTypes = {
  data: PropTypes.array
}

export default DragDropElements
```

App.js

```jsx
import React, { Component } from 'react'
import DragDropElements from './DragDropElements'

const bars = [
  {name: 'green', color: 'green'},
  {name: 'blue', color: 'blue'},
  {name: 'red', color: 'red'},
  {name: 'grey', color: 'grey'},
  {name: 'Cornsilk', color: 'Cornsilk'},
  {name: 'Cyan', color: 'Cyan'},
  {name: 'DarkViolet', color: 'DarkViolet'},
  {name: 'Gold', color: 'Gold'}
]

class App extends Component {
  constructor(props) {
    super(props)

    this.callbackDragDrop = this.callbackDragDrop.bind(this)
    this.state = {
      colorDrag: 'None',
      colorOver: 'None'
    }
  }

  /**
   * Callback drag-and-drop events
   * @param {string} method - Drag&Drop event name
   * @param {string} elementId - Id Over/Enter/Leave element
   * @param {HTMLElement} e - event
   * @param {string} currentDragElementId - id Drag element
   */
  callbackDragDrop(method, elementId, e, currentDragElementId) {
    switch (method) {

      case 'DragStart':
        e.currentTarget.style.border = '5px solid white'
        break

      case 'DragOver':
        this.setState({
          colorDrag: currentDragElementId,
          colorOver: elementId
        })
        e.currentTarget.style.border = `5px solid ${currentDragElementId}`
        break

      case 'DragLeave':
        e.currentTarget.style.border = '5px solid white'
        break

      case 'DragEnd':
      case 'DragEnter':
      case 'Drag':
      case 'Drop':
        // TODO
        break

      default:
        break
    }
  }

  render() {
    const {colorDrag, colorOver} = this.state

    return (
      <div>
        <h1>DragDropProvider</h1>
        <h2>Color Drag: <span style={{color: colorDrag}}>{colorDrag}</span></h2>
        <h2>Color Over: <span style={{color: colorOver}}>{colorOver}</span></h2>
        <p>Drag the square</p>
        <DragDropElements
          cbDragDrop={this.callbackDragDrop}
          data={bars}
        />
      </div>
    )
  }
}

export default App
```

index.css

```css
body {
  margin: 50px;
  padding: 0;
  font-family: sans-serif;
}

.bar-el {
  position: relative;
  float: left;
  width: 50px;
  height: 50px;
  margin: 10px;
  border: 5px solid white;
}
```

### Changelog
**1.0.10**
- Refactoring callback attribute


## License

MIT © [zhukyuri](https://github.com/zhukyuri)
