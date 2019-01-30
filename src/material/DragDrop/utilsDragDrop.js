import _ from 'lodash'

class utilsDragDrop {
  /**
   * Fix types transfer
   * @param {element} e
   * @returns {*}
   */
  static fixTransfer(e) {
    return e.dataTransfer ? e.dataTransfer.types : []
  }

  /**
   * Filter props
   * @param props
   * @returns {string|{}}
   */
  static filterProps(props) {
    let listNo = ['types', 'customClassName', 'enabled']

    return Object.keys(props).reduce((res, i) => {
      if (!listNo.includes(i)) {
        res[i] = props[i]
      }

      return res
    }, {})
  }

  /**
   * Convert to array
   * @param {object} obj
   * @returns {Array}
   */
  static convertToArray(obj) {
    let array = []

    Object.keys(obj).forEach((i) => {
      array.push(obj[i])
    })

    return array
  }

  /**
   * Select types
   * @param attemptingTypes
   * @param props
   * @returns {*}
   */
  static selectTypes(attemptingTypes, props) {
    let newProps = _.clone(props)

    if (!newProps.enabled) return false
    let _attemptingTypes = utilsDragDrop.convertToArray(attemptingTypes)
    if (!newProps.types) return true

    return [].concat(newProps.types).reduce((res, type) => {
      if (_attemptingTypes.indexOf(type) >= 0) return true

      return res
    }, false)
  }
}

export default utilsDragDrop
