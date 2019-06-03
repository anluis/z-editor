import * as React from 'react'
import workList from '../../../apis/works/workList'
import IStoreState, { Work } from '../../../types/IStoreState';
import styles from './Works.module.css'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { deleteAuth } from '../../../actions/auth';
import { handleAxiosAsyncError } from '../../../utils/helper/errorHandle/axiosError';
import PageNavi from '../../../components/Little/PageNavi/PageNavi'
import WorkCard from '../../../components/Cards/WorkCard/WorkCard';
import MaterialAddButton from '../../../components/Little/MaterialAddButton/MaterialAddButton';
import { createWork, applyWork } from '../../../actions/works';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom'
import workDelete from '../../../apis/works/workDelete';
import { setLoading } from '../../../actions/status';
const ApplyWorkDialog = React.lazy(() => import('../../../components/Dialogs/ConfirmDialog/ApplyWorkDialog'))
const BasicDeleteDialog = React.lazy(() => import('../../../components/Dialogs/DeleteDialog/BasicDeleteDialog'))
const CreateWorkDialog = React.lazy(() => import('../../../components/Dialogs/ConfirmDialog/CreateWorkDialog'))

interface OwnProps extends RouteComponentProps<any> {
}

interface DispatchProps {
  deleteAuth: () => void
  createWork: () => void
  applyWork: (work: Work) => void
  setLoading: (status: boolean) => void
}

type Props = OwnProps & DispatchProps

interface OwnState {
  page: number
  perPage: number
  workList: Array<Work>
  lastPage: number
  choosenWork: Work | undefined
  dialogOpen: boolean
  applyWorkDialogOpen: boolean
  createWorkDialogOpen: boolean
}

type State = OwnState

class Works extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      page: 1,
      perPage: 10,
      workList: [],
      lastPage: 0,
      choosenWork: undefined,
      dialogOpen: false,
      applyWorkDialogOpen: false,
      createWorkDialogOpen: false
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
    this.props.setLoading(true)
    try {
      const resWorks: any = await workList(args)
      this.setState({
        workList: resWorks.data.data,
        lastPage: resWorks.data.last_page
      })
      this.props.setLoading(false)
    } catch (e) {
      handleAxiosAsyncError(e)
      this.props.setLoading(false)
    }
  }

  handleNaviBefore = () => {
    if (this.state.page <= 1) {
      return
    }
    this.setState({
      page: this.state.page - 1
    }, () => {
      this.fetchList()
    })
  }

  handleNaviNext = () => {
    if (this.state.page >= this.state.lastPage) {
      return
    }
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.fetchList()
    })
  }

  handleWorkAdd = () => {
    this.handleWorkApplyDialogClose()
    this.props.createWork()
    this.props.history.push({
      pathname: '/editor'
    })
  }

  handleWorkDeleteDialogShow = () => {
    this.setState({
      dialogOpen: true
    })
  }

  handleWorkDeleteDialogClose = () => {
    this.setState({
      dialogOpen: false
    })
  }

  hanldeWorkApplyDialogShow = () => {
    this.setState({
      applyWorkDialogOpen: true
    })
  }

  handleWorkApplyDialogClose = () => {
    this.setState({
      applyWorkDialogOpen: false
    })
  }

  handleWorkDelete = async () => {
    try {
      const item = this.state.choosenWork
      if (item && item._id) {
        await workDelete({ _id: item._id })
        const workListFilter = this.state.workList.filter(listItem => listItem._id !== item._id)
        this.setState({
          workList: workListFilter
        })
      }
      this.handleWorkDeleteDialogClose()
    } catch (err) {
      handleAxiosAsyncError(err)
    }
  }

  handleChooseWorkToDelete = (item: Work) => {
    this.setState({
      choosenWork: item
    })
    this.handleWorkDeleteDialogShow()
  }

  handleChooseWorkToApply = (item: Work) => {
    this.setState({
      choosenWork: item
    })
    this.hanldeWorkApplyDialogShow()
  }

  handleApplyWorkConfirm = () => {
    if (this.state.choosenWork === undefined) {
      return
    }
    this.props.applyWork(this.state.choosenWork)
    this.props.history.push({
      pathname: '/editor'
    })
  }

  handleCreateWorkToConfirm = () => {
    this.setState({
      createWorkDialogOpen: true
    })
  }

  hanldeCreateWorkDialogClose = () => {
    this.setState({
      createWorkDialogOpen: false
    })
  }

  render() {
    const {
      workList,
      page,
      lastPage,
      dialogOpen,
      choosenWork,
      applyWorkDialogOpen,
      createWorkDialogOpen
    } = this.state
    const remindWord = `确定删除${choosenWork ? choosenWork.settings.title : ''}?`
    const applyWorkRemindWord = `确定放弃现有工作区，进行编辑${choosenWork ? choosenWork.settings.title : ''}?`
    const renderWorkCards = workList.map((item: Work, index) => {
      return <WorkCard
        work={item}
        key={index}
        handleWorkChooseToApply={(item) => this.handleChooseWorkToApply(item)}
        handleWorkChooseToDelete={(item) => this.handleChooseWorkToDelete(item)}
      />
    })
    return <div className={styles.works}>
      <div className={styles.workflex}>
        {renderWorkCards}
      </div>
      <MaterialAddButton handleMaterialAdd={this.handleCreateWorkToConfirm} />
      <PageNavi
        currentPage={page}
        listLength={lastPage}
        handleNaviBefore={this.handleNaviBefore}
        handleNaviNext={this.handleNaviNext}
      />
      <React.Suspense fallback={null}>
        <BasicDeleteDialog
          confirmDeleteFunction={this.handleWorkDelete}
          closeFunction={this.handleWorkDeleteDialogClose}
          remindWord={remindWord}
          open={dialogOpen}
        />
      </React.Suspense>
      <React.Suspense fallback={null}>
        <ApplyWorkDialog
          confirmFuction={this.handleApplyWorkConfirm}
          closeFunction={this.handleWorkApplyDialogClose}
          remindWord={applyWorkRemindWord}
          open={applyWorkDialogOpen}
        />
      </React.Suspense>
      <React.Suspense fallback={null}>
        <CreateWorkDialog
          confirmFuction={this.handleWorkAdd}
          closeFunction={this.hanldeCreateWorkDialogClose}
          remindWord={'确定放弃现有工作区内容创建新作品吗？'}
          open={createWorkDialogOpen}
        />
      </React.Suspense>

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
    },
    applyWork: (work) => {
      dispatch(applyWork(work))
    },
    setLoading: (status: boolean) => {
      dispatch(setLoading(status))
    }
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Works))