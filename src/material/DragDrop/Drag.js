import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class Drag extends React.Component {

  constructor(props) {
    super(props)

    this.onDragStart = this.onDragStart.bind(this)
    this.onDragEnd = this.onDragEnd.bind(this)
  }

  onDragStart(e) {
    const {onDragStart} = this.props
    let props = _.clone(this.props)

    if (onDragStart) onDragStart(e)
    e.dataTransfer.setData(props.type, props.data)
  }

  onDragEnd(e) {
    const {onDragEnd} = this.props

    if (onDragEnd) onDragEnd(e)
  }

  render() {
    const {enabled} = this.props
    let props = _.clone(this.props)

    if (enabled) {
      props.draggable = 'true'
      props.onDragEnd = this.onDragEnd
      props.onDragStart = this.onDragStart
    }
    delete props.enabled

    return (
      <div {...props}>
        {props.children}
      </div>
    )
  }
}

Drag.defaultProps = {
  enabled: true
}

Drag.propTypes = {
  enabled: PropTypes.bool,
  onDragStart: PropTypes.any,
  onDragEnd: PropTypes.any,
}

export default Drag
