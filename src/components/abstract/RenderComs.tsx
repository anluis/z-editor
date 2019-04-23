import * as React from 'react'
import IStoreState from '../../types/IStoreState';
import { connect } from 'react-redux';
import { Coms, Com } from '../../types/coms';
interface OwnProps {
  coms: Coms
}

type Props = OwnProps

class RenderComs extends React.Component<Props> {

  render() {
    // const { coms } = this.props
    // renderComs = coms.map((item) => {
    //   return this.RenderCom(item)
    // })
    return null
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { coms } = state.work
  return {
    coms
  }
}

export default connect(mapStateToProps)(RenderComs)