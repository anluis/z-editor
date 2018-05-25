import React from 'react'
import { connect } from 'react-redux'
import ComList from '../components/ComList'

const getVisibleComs = (coms, filter) => {
  const designArea = {
    width: '90%',
    height: '90%',
    border: '1px solid gray'
  }
  return (
    <div className="main-left">
      <div className="design-area" style={designArea}>
        {coms}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  coms: getVisibleComs(state.coms, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ComList)
