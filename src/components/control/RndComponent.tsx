import * as React from 'react'
// @ts-ignore
import Rnd from 'react-rnd'
import { Com } from '../../types/coms';
import { updateCom, focusCom } from '../../actions/coms';
import RenderCom from '../../components/abstract/RenderCom'
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { connect } from 'react-redux'

interface OwnProps {
  com: Com
  mode?: string
  zIndex: number
}

interface DispatchProps {
  focusCom: (id: number) => void
  updateCom: (id: number, com: Com) => void
}

type Props = OwnProps & DispatchProps

class RndComponent extends React.Component<Props> {
  render() {
    const { com, focusCom, updateCom, mode, zIndex } = this.props
    const bindRndStyle = {
      border: '1px solid rgb(8, 161, 239)',
      zIndex: zIndex,
      boxSizing: 'unset'
    }
    return (
      <Rnd
        bounds={'.bound'}
        style={bindRndStyle}
        size={{ width: com.width, height: com.height }}
        position={{ x: com.x, y: com.y }}
        onDragStart={() => {
          focusCom(com.id)
        }}
        onDragStop={(e: any, d: any) => {
          let comCopy = { ...com }
          comCopy.x = d.x
          comCopy.y = d.y
          updateCom(com.id, comCopy)
        }}
        onResizeStart={() => {
          focusCom(com.id)
        }}
        onResizeStop={(e: any, direction: any, ref: any, delta: any, position: any) => {
          let comCopy = { ...com }
          comCopy.width = ref.offsetWidth
          comCopy.height = ref.offsetHeight
          comCopy = {
            ...comCopy,
            ...position
          }
          updateCom(com.id, comCopy)
        }}
      >
        <RenderCom com={com} mode={mode} zIndex={zIndex} />
      </Rnd>
    )
  }
}


const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>): DispatchProps => {
  return {
    focusCom: (id: number) => {
      dispatch(focusCom(id))
    },
    updateCom: (id: number, com: Com) => {
      dispatch(updateCom(id, com))
    }
  }
}

export default connect(null, mapDispatchToProps)(RndComponent)