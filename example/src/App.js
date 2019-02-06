import React, { Component } from 'react'
import DragDropElements from './DragDropElements'

const bars = [
  {name: 'green', color: 'green'},
  {name: 'blue', color: 'blue'},
  {name: 'red', color: 'red'},
  {name: 'grey', color: 'grey'},
  {name: 'Salmon  ', color: 'Salmon'},
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
