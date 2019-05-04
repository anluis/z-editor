import * as React from 'react'
import works from '../../../apis/works/works'
import IStoreState from '../../../types/IStoreState';
import { connect } from 'react-redux'
import styles from './Works.module.css'
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { deleteAuth } from '../../../actions/auth';

interface OwnProps {
  accessToken: string
}

interface DispatchProps {
  deleteAuth: () => void
}

type Props = OwnProps & DispatchProps

class Works extends React.Component<Props> {
  async componentDidMount() {
    const { accessToken } = this.props
    const args = {
      Authorization: 'Bearer ' + accessToken,
      page: 1,
      perPage: 10
    }
    try {
      const resWors = await works(args)
    } catch (e) {
      if (e.response.status === 401) {
        this.props.deleteAuth()
      }
    }
  }
  render() {
    return <div className={styles.works}>
      <img src="https://cdn.xingstation.cn/fe/actiview/img/actiview-logo.png" />
    </div>
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { accessToken } = state.auth
  return {
    accessToken
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>): DispatchProps => {
  return {
    deleteAuth: () => {
      dispatch(deleteAuth())
    }
  }

}



export default connect(mapStateToProps, mapDispatchToProps)(Works)