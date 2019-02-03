// @flow

import React, { Component } from 'react'

type Props = {
  // all events
  cbDragDrop?: any,
  // standard events
  cbDragStart?: any,
  cbDrag?: any,
  cbDragEnd?: any,
  cbDragOver?: any,
  cbDragEnter?: any,
  cbDragLeave?: any,
  cbDrop?: any,
  // children
  children?: any,
};

type State = {}

type typeDrag = {
  dragid?: string,
}

class DragDropProvider extends Component<Props, State> {
  constructor(props) {
    super(props)

    this.onDragStart = this.onDragStart.bind(this)
    this.onDragEnd = this.onDragEnd.bind(this)

    this.onDragOver = this.onDragOver.bind(this)
    this.onDragEnter = this.onDragEnter.bind(this)
    this.onDragLeave = this.onDragLeave.bind(this)
    this.onDrop = this.onDrop.bind(this)
    this.onDrag = this.onDrag.bind(this)

    this.onAllEventDragDrop = this.onAllEventDragDrop.bind(this)

    this.currentDragElementId = null
    this.currentDropId = null
  }

  /**
   * All events in one method
   * @param {string} method
   * @param {string} eventElementId
   * @param {event} e
   */
  onAllEventDragDrop(method: string, eventElementId: string, e: SyntheticDragEvent<*>): void {
    const {cbDragDrop} = this.props

    if (cbDragDrop) {
      cbDragDrop(method, eventElementId, e, this.currentDragElementId)
    }
  }

  onDragStart(e: SyntheticDragEvent<HTMLElement>) {
    const {cbDragStart} = this.props
    const dataset: typeDrag = e.currentTarget.dataset
    e.dataTransfer.effectAllowed = 'move'

    if (dataset && dataset.dragid) {
      this.currentDragElementId = dataset.dragid
      this.currentMethod = 'DragStart'

      if (cbDragStart) {
        cbDragStart(this.currentMethod, this.currentDragElementId, e)
      }

      this.onAllEventDragDrop(this.currentMethod, this.currentDragElementId, e)
    } else {
      this.currentDragElementId = null
    }
  }

  onDragEnd(e: SyntheticDragEvent<HTMLElement>) {
    const {cbDragEnd} = this.props
    const dataset: typeDrag = e.currentTarget.dataset

    if (dataset && dataset.dragid) {
      this.currentMethod = 'DragEnd'

      if (cbDragEnd) {
        cbDragEnd(this.currentMethod, dataset.dragid, e, this.currentDragElementId)
      }

      this.onAllEventDragDrop(this.currentMethod, dataset.dragid, e)
    }

    this.currentDragElementId = null
    this.currentDropId = null
  }

  /**
   * On Drag over
   * @param {SyntheticDragEvent<*>} e
   */
  onDragOver(e: SyntheticDragEvent<*>) {
    const {cbDragOver} = this.props
    const dataset: typeDrag = e.currentTarget.dataset
    e.preventDefault()

    if (dataset && dataset.dragid) {
      this.currentMethod = 'DragOver'

      if (dataset.dragid) {
        if (cbDragOver) {
          cbDragOver(this.currentMethod, dataset.dragid, e, this.currentDragElementId)
        }

        this.onAllEventDragDrop(this.currentMethod, dataset.dragid, e)
      }

      this.currentDropId = dataset.dragid
    }
  }

  /**
   * On Drag enter
   * @param {SyntheticDragEvent<*>} e
   */
  onDragEnter(e: SyntheticDragEvent<*>) {
    const {cbDragEnter} = this.props
    const dataset: typeDrag = e.currentTarget.dataset
    e.preventDefault()

    if (dataset && dataset.dragid) {
      this.currentMethod = 'DragEnter'
      this.currentDropId = dataset.dragid

      if (cbDragEnter) {
        cbDragEnter(this.currentMethod, dataset.dragid, e, this.currentDragElementId)
      }

      this.onAllEventDragDrop(this.currentMethod, dataset.dragid, e)
    }
  }

  /**
   * On Drag leave
   * @param {SyntheticDragEvent<*>} e
   */
  onDragLeave(e: SyntheticDragEvent<*>) {
    const {cbDragLeave} = this.props
    const dataset: typeDrag = e.currentTarget.dataset
    e.preventDefault()

    if (dataset && dataset.dragid) {
      this.currentMethod = 'DragLeave'
      this.currentDropId = dataset.dragid

      if (cbDragLeave && dataset.dragid) {
        cbDragLeave(this.currentMethod, dataset.dragid, e, this.currentDragElementId)
      }

      this.onAllEventDragDrop(this.currentMethod, dataset.dragid, e)
    }
  }

  /**
   * On Drop
   * @param {SyntheticDragEvent<*>} e
   */
  onDrop(e: SyntheticDragEvent<*>) {
    const {cbDrop} = this.props
    const dataset: typeDrag = e.currentTarget.dataset

    if (dataset && dataset.dragid) {
      this.currentMethod = 'Drop'

      if (cbDrop && dataset.dragid) {
        cbDrop(this.currentMethod, dataset.dragid, e, this.currentDragElementId)
      }

      this.onAllEventDragDrop(this.currentMethod, dataset.dragid, e)
    }
  }

  /**
   * On Drag
   * @param {SyntheticDragEvent<*>} e
   */
  onDrag(e: SyntheticDragEvent<*>) {
    const {cbDrag} = this.props
    const dataset: typeDrag = e.currentTarget.dataset

    if (dataset && dataset.dragid) {
      this.currentMethod = 'Drag'

      if (cbDrag && dataset.dragid) {
        cbDrag(this.currentMethod, dataset.dragid, e, this.currentDragElementId)
      }

      this.onAllEventDragDrop(this.currentMethod, dataset.dragid, e)
    }
  }

  render() {
    const {children} = this.props

    return (
      <div>
        {children}
      </div>
    )
  }
}

export default DragDropProvider
