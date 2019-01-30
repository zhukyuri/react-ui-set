import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import _ from 'lodash'
import utilsDragDrop from './utilsDragDrop'

type Props = {}

class Drop extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.onDrop = this.onDrop.bind(this)
    this.onDragOver = this.onDragOver.bind(this)
    this.onDragEnter = this.onDragEnter.bind(this)
    this.onDragLeave = this.onDragLeave.bind(this)

    this.state = {
      isOver: false,
    }

    this.refDropElement = React.createRef()
    this.fixPositionElem = 5
    this.position = null
  }

  componentDidMount() {
    let refElem = this.refDropElement.current

    this.position = {
      top: refElem.offsetTop + this.fixPositionElem,
      left: refElem.offsetLeft + this.fixPositionElem,
      right: refElem.offsetLeft + refElem.offsetWidth - this.fixPositionElem,
      bottom: refElem.offsetTop + refElem.offsetHeight - this.fixPositionElem,
    }
  }

  /**
   * On Drag over
   * @param {$ElementType} e
   */
  onDragOver(e) {
    const {onDragOver} = this.props

    e.preventDefault()

    if (!utilsDragDrop.selectTypes(utilsDragDrop.fixTransfer(e), this.props)) return
    if (onDragOver) onDragOver(e)
  }

  /**
   * On Drag enter
   * @param {$ElementType} e
   */
  onDragEnter(e) {
    const {onDragEnter} = this.props
    const {isOver} = this.state

    e.preventDefault()

    if (isOver) return
    if (!utilsDragDrop.selectTypes(utilsDragDrop.fixTransfer(e), this.props)) return
    if (onDragEnter) onDragEnter(e)
    this.setState({isOver: true})
  }

  /**
   * On Drag leave
   * @param {$ElementType} e
   */
  onDragLeave(e) {
    const {onDragLeave} = this.props
    let overPosition = true

    e.preventDefault()

    if (!utilsDragDrop.selectTypes(utilsDragDrop.fixTransfer(e), this.props)) return
    if (e.clientX <= this.position.left || e.clientX >= this.position.right) overPosition = false
    if (e.clientY <= this.position.top || e.clientY >= this.position.bottom) overPosition = false
    if (overPosition) return

    this.setState(
      {
        isOver: false,
      },
    )
    if (onDragLeave) onDragLeave(e)
  }

  /**
   * On Drop
   * @param {$ElementType} e
   */
  onDrop(e) {
    const {onDrop} = this.props
    let props = _.clone(this.props)

    e.preventDefault()

    if (!utilsDragDrop.selectTypes(utilsDragDrop.filterProps(e), this.props)) return
    this.setState(
      {
        isOver: false,
      }
    )

    const data = !props.types ? null : [].concat(props.types).reduce((res, type) => {
      res[type] = e.dataTransfer.getData(type)

      return res
    }, {})
    if (onDrop) onDrop(data, e)
  }

  render() {
    const {customClassName, children} = this.props
    const {isOver} = this.state
    let props = _.clone(this.props)
    const newProps = utilsDragDrop.filterProps(props)

    return (
      <div
        ref={this.refDropElement}
        className={cn('class-drop', customClassName, {classOver: isOver})}
        {...newProps}
        onDrop={this.onDrop}
        onDragOver={this.onDragOver}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        onDragExit={this.onDragLeave}
      >
        {children}
      </div>
    )
  }
}

Drop.defaultProps = {
  enabled: true,
}

Drop.propTypes = {
  enabled: PropTypes.bool,
  onDragOver: PropTypes.func,
  onDragEnter: PropTypes.func,
  onDragLeave: PropTypes.func,
  customClassName: PropTypes.string,
  children: PropTypes.element.isRequired}

export default Drop
