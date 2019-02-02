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
