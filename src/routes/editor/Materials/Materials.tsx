import * as React from 'react'
import materials from '../../../apis/materials/materials'
import IStoreState from '../../../types/IStoreState';
import { connect } from 'react-redux'
import styles from './Materials.module.css'
import { Button } from '@material-ui/core'
import { Pagination } from 'antd';
import 'antd/lib/pagination/style/css';
import { setErrorMessage } from '../../../actions/status';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RouteComponentProps } from 'react-router';
import { deleteAuth } from '../../../actions/auth';

interface OwnProps extends RouteComponentProps {
  accessToken: string
}

interface DispatchProps {
  setErrorMessage: (message: string) => void
  deleteAuth: () => void
}

type Props = OwnProps & DispatchProps

interface OwnState {
  totalPages: number
  currentPage: number
  data: Array<any>
}



type State = OwnState

class Materials extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      totalPages: 0,
      currentPage: 1,
      data: []
    }
  }
  componentDidMount() {
    this.fetchList()
  }

  onPaginationChange = (page: number) => {
    this.setState({
      currentPage: page
    })
    this.fetchList()
  }

  fetchList = async () => {
    const { accessToken } = this.props
    const { currentPage } = this.state
    const args = {
      Authorization: 'Bearer ' + accessToken,
      page: currentPage,
      perPage: 10
    }
    try {
      const r: any = await materials(args)
      this.setState({
        totalPages: r.data.meta.pagination.total_pages,
        data: r.data.data
      })
    } catch (e) {
      // this.props.setErrorMessage(e.message)
      this.props.deleteAuth()
      this.props.history.replace({
        pathname: '/login'
      })
    }
  }

  render() {
    const { totalPages, data } = this.state
    const renderDatas = data.map((item, index) => {
      return (
        <div key={index}>
          {item.category}
        </div>
      )
    })
    return <div className={styles.materials}>
      <div className={styles.functions}>
        <Button variant="contained" color="primary">上传</Button>
      </div>
      <div className={styles.list}>
        <div className={styles.listitem}>
          {renderDatas}
        </div>
      </div>
      <div className={styles.pagination}>
        <Pagination showQuickJumper defaultCurrent={1} total={totalPages} onChange={this.onPaginationChange} />
      </div>
    </div>
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { accessToken } = state.auth
  return {
    accessToken
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  return {
    setErrorMessage: (message: string) => {
      dispatch(setErrorMessage(message))
    },
    deleteAuth: () => {
      dispatch(deleteAuth())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Materials)