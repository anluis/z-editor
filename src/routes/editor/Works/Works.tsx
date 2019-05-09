import * as React from 'react'
import workList from '../../../apis/works/workList'
import IStoreState, { Work } from '../../../types/IStoreState';
import { connect } from 'react-redux'
import styles from './Works.module.css'
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { deleteAuth } from '../../../actions/auth';
import { handleAxiosAsyncError } from '../../../utils/helper/errorHandle/axiosError';
import PageNavi from '../../../components/Little/PageNavi/PageNavi'
import WorkCard from '../../../components/Cards/WorkCard/WorkCard';
import MaterialAddButton from '../../../components/Little/MaterialAddButton/MaterialAddButton';
import { createWork } from '../../../actions/works';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom'

interface OwnProps extends RouteComponentProps<any> {
}

interface DispatchProps {
  deleteAuth: () => void
  createWork: () => void
}

type Props = OwnProps & DispatchProps

interface OwnState {
  page: number
  perPage: number
  workList: Array<Work>
  lastPage: number
}

type State = OwnState

class Works extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      page: 1,
      perPage: 10,
      workList: [],
      lastPage: 0
    }
  }
  async componentDidMount() {
    this.fetchList()
  }

  fetchList = async () => {
    const { page, perPage } = this.state
    const args = {
      page: page,
      perPage: perPage
    }
    try {
      const resWorks: any = await workList(args)
      this.setState({
        workList: resWorks.data.data,
        lastPage: resWorks.data.last_page
      })
    } catch (e) {
      handleAxiosAsyncError(e)
    }
  }

  handleNaviBefore = () => {
    if (this.state.page <= 1) {
      return
    }
    this.setState({
      page: this.state.page - 1
    })
    this.fetchList()
  }

  handleNaviNext = () => {
    if (this.state.page >= this.state.lastPage) {
      return
    }
    this.setState({
      page: this.state.page + 1
    })
    this.fetchList()
  }

  handleWorkAdd = () => {
    this.props.createWork()
    this.props.history.push({
      pathname: '/editor'
    })
  }

  render() {
    const { workList } = this.state
    const renderWorkCards = workList.map((item, index) => {
      return <WorkCard work={item} key={index} />
    })
    return <div className={styles.works}>
      <div className={styles.workflex}>
        {renderWorkCards}
      </div>
      <MaterialAddButton handleMaterialAdd={this.handleWorkAdd} />
      <PageNavi handleNaviBefore={this.handleNaviBefore} handleNaviNext={this.handleNaviNext} />
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
    },
    createWork: () => {
      dispatch(createWork())
    }
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Works))