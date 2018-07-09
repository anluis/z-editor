import React from 'react'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { addCom } from '../actions'

const defaultStyle = {
  height: 100,
  width: 100,
  x: 0,
  y: 0,
  imgUrl:
    'https://dn-coding-net-production-static.qbox.me/d4c0b468-29dd-4996-ae65-58a4b038fc39.JPG?imageMogr2/auto-orient/format/jpeg/crop/!538x538a0a0'
}

const defaultContext = {
  name: '新组件'
}
const AddCom = ({ dispatch }) => {
  return (
    <div>
      <Button
        onClick={() => dispatch(addCom(defaultStyle, defaultContext))}
        variant="raised"
        color="primary"
      >
        新增
      </Button>
    </div>
  )
}

export default connect()(AddCom)
