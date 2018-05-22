import React from 'react'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { addCom } from '../actions'

const AddCom = ({ dispatch }) => {
  return (
    <Button onClick={() => dispatch(addCom())} variant="raised" color="primary">
      新增
    </Button>
  )
}

export default connect()(AddCom)
