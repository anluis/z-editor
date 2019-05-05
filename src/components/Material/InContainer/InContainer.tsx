import * as React from 'react'
import styles from './InContainer.module.css'
import IStoreState from '../../../types/IStoreState';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';

interface OwnProps {
  type: number
}

type Props = OwnProps

interface OwnState {
  // when need to do upload action, value change
  tabValueSecond: number
}

type State = OwnState

class InContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      tabValueSecond: 0
    }
  }

  render() {
    return (
      <div className={styles.inctn}>

      </div>
    )
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { materialCurrentValue } = state.status
  return {
    materialCurrentValue
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(InContainer)