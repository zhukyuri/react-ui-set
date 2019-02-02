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
