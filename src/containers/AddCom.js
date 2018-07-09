import React from 'react'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { addCom } from '../actions'

const defaultStyle = {
  height: 100,
  width: 100,
  x: 0,
  y: 0
}

const defaultContext = {
  name: '新组件'
}
const AddCom = ({ dispatch }) => {
  return (
    <Button
      onClick={() => dispatch(addCom(defaultStyle, defaultContext))}
      variant="raised"
      color="primary"
    >
      新增
    </Button>
  )
}

export default connect()(AddCom)
