# react-ui-set

> React UI material

[![NPM](https://img.shields.io/npm/v/react-ui-set.svg)](https://www.npmjs.com/package/react-ui-set) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-ui-set
```

Material list:
- DropDownProvider
- (Other in progress)

[Demo](https://zhukyuri.github.io/react-ui-set/)


# DropDownProvider

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
            data-dragid={'any-id'}            // is required
            . . .
            draggable={true}                 // is required

            onDragStart={this.onDragStart}          // is required
            onDrag={this.onDrag}
            onDragEnd={this.onDragEnd}
            onDrop={this.onDrop}
            onDragOver={this.onDragOver}
            onDragEnter={this.onDragEnter}
            onDragLeave={this.onDragLeave}
          />

```


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


## Example 1

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
            className='bar-el'
            style={{backgroundColor: i.color}}
            data-dragid={i.name} // is required
            draggable={true} // is required

            onDragStart={this.onDragStart} // is required
            // onDrag={this.onDrag}
            // onDragEnd={this.onDragEnd}
            // onDrop={this.onDrop}
            onDragOver={this.onDragOver}
            // onDragEnter={this.onDragEnter}
            // onDragLeave={this.onDragLeave}
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
      case 'DragOver':
        this.setState({
          colorDrag: currentDragElementId,
          colorOver: elementId
        })
        break
      case 'DragStart':
      case 'DragEnd':
      case 'DragEnter':
      case 'DragLeave':
      case 'Drag':
      case 'Drop':
        // TODO
        break
      default:
        break
    }
  }

  render() {
    return (
      <div>
        <h1>DragDropProvider</h1>
        <h2>Color Drag: {this.state.colorDrag}</h2>
        <h2>Color Over: {this.state.colorOver}</h2>
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
}
```


## License

MIT © [zhukyuri](https://github.com/zhukyuri)
