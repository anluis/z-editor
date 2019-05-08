import * as React from 'react'
import workList from '../../../apis/works/workList'
import IStoreState from '../../../types/IStoreState';
import { connect } from 'react-redux'
import styles from './Works.module.css'
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { deleteAuth } from '../../../actions/auth';
import { handleAxiosAsyncError } from '../../../utils/helper/errorHandle/axiosError';

interface OwnProps {
}

interface DispatchProps {
  deleteAuth: () => void
}

type Props = OwnProps & DispatchProps

class Works extends React.Component<Props> {
  async componentDidMount() {
    const args = {
      page: 1,
      perPage: 10
    }
    try {
      const resWorks = await workList(args)
      console.dir(resWorks)
    } catch (e) {
      handleAxiosAsyncError(e)
    }
  }
  render() {
    return <div className={styles.works}>
      <img src="https://cdn.xingstation.cn/fe/actiview/img/actiview-logo.png" />
    </div>
  }
}

const mapStateToProps = (state: IStoreState) => {
  return {
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