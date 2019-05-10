import * as React from 'react'
import styles from './InContainer.module.css'
import IStoreState from '../../../types/IStoreState';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import materials, { MaterialArgs } from '../../../apis/materials/materials';
import { Material, ImgMaterial, LottieMaterial, VideoMaterial } from '../../../types/materials'
import ImageCard from '../../Cards/ImageCard/ImageCard';
import VideoCard from '../../Cards/VideoCard/VideoCard';
import LottieCard from '../../Cards/LottieCard/LottieCard';
import { handleAxiosAsyncError } from '../../../utils/helper/errorHandle/axiosError';
import MaterialAddButton from '../../Little/MaterialAddButton/MaterialAddButton';
import InContainerAdd from '../InContainerAdd/InContainerAdd';
import materialTypeByValue from '../../../utils/helper/typeReturner/materialTypeByValue'
import { IMAGE, VIDEO, LOTTIE, AUDIO } from '../../../constants/coms';
import MaterialCancelButton from '../../Little/MaterialCancalButton/MaterialCancelButton';
import materialDelete from '../../../apis/materials/materialDelete';
const MaterialDeleteDialog = React.lazy(() => import('../../Dialogs/DeleteDialog/MaterialDeleteDialog'))

interface OwnProps {
  materialCurrentValue: number
  belong: string
}

type Props = OwnProps

interface OwnState {
  // when need to do upload action, value change
  tabValueSecond: number
  page: number
  materialsList: Array<Material>
  toRemoveMaterial: Material | null
  deleteDialogOpen: boolean
}

type State = OwnState

class InContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      tabValueSecond: 0,
      page: 1,
      materialsList: [],
      toRemoveMaterial: null,
      deleteDialogOpen: false
    }
  }

  componentDidMount() {
    this.fetchMaterialList()
  }

  fetchMaterialList = async () => {
    const { page } = this.state
    const { materialCurrentValue } = this.props
    try {
      let requestArgs: MaterialArgs = {
        page: page,
        perPage: 10
      }
      const type = materialTypeByValue(materialCurrentValue)
      if (type !== null) {
        requestArgs.type = type
      }
      const listRes: any = await materials(requestArgs)
      this.setState({
        materialsList: listRes.data.data
      })
    } catch (err) {
      handleAxiosAsyncError(err)
    }
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
    if (toRemoveMaterial !== null && toRemoveMaterial._id) {
      try {
        await materialDelete({ _id: toRemoveMaterial._id })
        this.setState({
          deleteDialogOpen: false,
          materialsList: this.state.materialsList.filter(item => item._id !== toRemoveMaterial._id)
        })
      } catch (err) {
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

  render() {
    const { tabValueSecond, materialsList, toRemoveMaterial, deleteDialogOpen } = this.state
    const { belong, materialCurrentValue } = this.props
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
    const remindWord = toRemoveMaterial !== null ? `确定删除${toRemoveMaterial.name}吗？` : '确定删除吗？'
    return (
      <>
        <div className={styles.inctn}>
          {tabValueSecond === 0 && <MaterialAddButton handleMaterialAdd={this.handleMaterialAdd} />}
          {tabValueSecond !== 0 && <MaterialCancelButton handleMaterialChooseAndFresh={this.handleMaterialChooseAndFresh} />}
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
  const { materialCurrentValue } = state.status.present
  return {
    materialCurrentValue
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  return {
    ss: () => {
      return {

      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InContainer)