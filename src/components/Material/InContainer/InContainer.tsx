import * as React from 'react'
import styles from './InContainer.module.css'
import IStoreState from '../../../types/IStoreState';
import ImageCard from '../../Cards/ImageCard/ImageCard';
import VideoCard from '../../Cards/VideoCard/VideoCard';
import LottieCard from '../../Cards/LottieCard/LottieCard';
import MaterialAddButton from '../../Little/MaterialAddButton/MaterialAddButton';
import InContainerAdd from '../InContainerAdd/InContainerAdd';
import materialTypeByValue from '../../../utils/helper/typeReturner/materialTypeByValue'
import MaterialCancelButton from '../../Little/MaterialCancalButton/MaterialCancelButton';
import materialDelete from '../../../apis/materials/materialDelete';
import PageNavi from '../../Little/PageNavi/PageNavi';
import { connect } from 'react-redux';
import materials, { MaterialArgs } from '../../../apis/materials/materials';
import { Material, ImgMaterial, LottieMaterial, VideoMaterial } from '../../../types/materials'
import { handleAxiosAsyncError } from '../../../utils/helper/errorHandle/axiosError';
import { IMAGE, VIDEO, LOTTIE } from '../../../constants/coms';
import { ThunkDispatch } from 'redux-thunk';
import { setLoading } from '../../../actions/status';

const MaterialDeleteDialog = React.lazy(() => import('../../Dialogs/DeleteDialog/MaterialDeleteDialog'))

interface OwnProps {
  materialCurrentValue: number
  belong: string
}

interface DispatchProps {
  setLoading: (status: boolean) => void
}

type Props = OwnProps & DispatchProps

interface OwnState {
  // when need to do upload action, value change
  tabValueSecond: number
  page: number
  materialsList: Array<Material>
  toRemoveMaterial: Material | undefined
  deleteDialogOpen: boolean
  perPage: number
  totalPage: number
  choosenMaterial: Material | undefined
}

type State = OwnState

class InContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      tabValueSecond: 0,
      page: 1,
      materialsList: [],
      toRemoveMaterial: undefined,
      choosenMaterial: undefined,
      deleteDialogOpen: false,
      perPage: 10,
      totalPage: 0
    }
  }

  componentDidMount() {
    this.fetchMaterialList()
  }

  fetchMaterialList = async () => {
    const { page, perPage } = this.state
    const { materialCurrentValue } = this.props
    try {
      this.props.setLoading(true)
      let requestArgs: MaterialArgs = {
        page: page,
        perPage: perPage
      }
      const type = materialTypeByValue(materialCurrentValue)
      if (type !== null) {
        requestArgs.type = type
      }
      const listRes: any = await materials(requestArgs)
      this.setState({
        materialsList: listRes.data.data,
        totalPage: listRes.data.last_page
      })
      this.props.setLoading(false)
    } catch (err) {
      this.props.setLoading(false)
      handleAxiosAsyncError(err)
    }
  }

  handleNaviBefore = () => {
    this.setState({
      page: this.state.page - 1
    }, () => {
      this.fetchMaterialList()
    })
  }

  handleNaviNext = () => {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.fetchMaterialList()
    })
  }

  handleMaterialAdd = () => {
    this.setState({
      tabValueSecond: 1
    })
  }

  handleMaterialChooseAndFresh = () => {
    this.setState({
      tabValueSecond: 0
    })
    this.fetchMaterialList()
  }

  removeMaterialItem = async () => {
    const { toRemoveMaterial } = this.state
    if (!toRemoveMaterial) {
      return
    }
    if (toRemoveMaterial._id) {
      try {
        this.props.setLoading(true)
        await materialDelete({ _id: toRemoveMaterial._id })
        this.setState({
          deleteDialogOpen: false,
          materialsList: this.state.materialsList.filter(item => item._id !== toRemoveMaterial._id)
        })
        this.props.setLoading(false)
      } catch (err) {
        this.props.setLoading(false)
        handleAxiosAsyncError(err)
      }
    }
  }

  handleDeleteDialog = (materialFromCard: Material) => {
    this.setState({
      deleteDialogOpen: true,
      toRemoveMaterial: materialFromCard
    })
  }

  closeDeleteDialog = () => {
    this.setState({
      deleteDialogOpen: false
    })
  }

  handleChoosen = (item: Material) => {
    this.setState({
      choosenMaterial: item
    })
  }

  render() {
    const {
      tabValueSecond,
      materialsList,
      toRemoveMaterial,
      deleteDialogOpen,
      totalPage,
      page
    } = this.state
    const {
      belong,
      materialCurrentValue
    } = this.props
    const renderItemByType = (item: Material, index: number) => {
      switch (item.type) {
        case IMAGE:
          return <ImageCard
            material={item as ImgMaterial}
            belong={belong}
            key={index}
            handleDeleteDialog={this.handleDeleteDialog}
          />
        case VIDEO:
          return <VideoCard
            material={item as VideoMaterial}
            belong={belong}
            key={index}
            handleDeleteDialog={this.handleDeleteDialog}
          />
        case LOTTIE:
          return <LottieCard
            material={item as LottieMaterial}
            belong={belong}
            key={index}
            handleDeleteDialog={this.handleDeleteDialog}
          />
        default:
          return null
      }
    }

    const renderListItem = (item: Material, index: number) => {
      return renderItemByType(item, index)
    }
    const renderListItems = materialsList.map((item, index) => {
      return renderListItem(item, index)
    })
    const remindWord = toRemoveMaterial ? `确定删除${toRemoveMaterial.name}吗？` : '确定删除吗？'
    return (
      <>
        <div className={styles.inctn}>
          {
            tabValueSecond === 0 &&
            <MaterialAddButton handleMaterialAdd={this.handleMaterialAdd} />
          }
          {
            tabValueSecond !== 0 &&
            <MaterialCancelButton handleMaterialChooseAndFresh={this.handleMaterialChooseAndFresh} />}
          {/* step1 choose current materials */}
          {tabValueSecond === 0 &&
            renderListItems}
          {/* step2 upload materials */}
          {tabValueSecond === 1 &&
            <InContainerAdd
              materialCurrentValue={materialCurrentValue}
              handleMaterialChooseAndFresh={this.handleMaterialChooseAndFresh}
            />}
        </div>
        {/* Navi Component */}
        {
          tabValueSecond === 0 &&
          <PageNavi
            handleNaviBefore={this.handleNaviBefore}
            handleNaviNext={this.handleNaviNext}
            listLength={totalPage}
            currentPage={page}
          />
        }

        <MaterialDeleteDialog
          open={deleteDialogOpen}
          confirmDeleteFunction={this.removeMaterialItem}
          closeFunction={this.closeDeleteDialog}
          remindWord={remindWord}
        />
      </>
    )
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { materialCurrentValue } = state.status
  return {
    materialCurrentValue
  }
}


const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    setLoading: (status: boolean) => {
      dispatch(setLoading(status))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InContainer)