import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import Input from '@material-ui/core/Input'
// import { changeCurrentName } from '../actions'

// 组件状态 可以去掉 reducers/comstatus 之前想错了
const ComStatus = ({ dispatch, coms }) => {
  if (coms.length === 0) {
    return null
  } else
    return (
      <div>
        <div>组件id: {coms[0].id}</div>
      </div>
    )
}
ComStatus.PropTypes = {
  id: PropTypes.number.isRequired
}

export default connect()(ComStatus)
