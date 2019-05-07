import * as React from 'react'
import styles from './InContainer.module.css'
import IStoreState from '../../../types/IStoreState';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { IMAGE, VIDEO, LOTTIE, AUDIO } from '../../../constants/coms';
import materials, { MaterialArgs } from '../../../apis/materials/materials';
import { Material } from '../../../types/materials'
import ImageCard from '../../Cards/ImageCard/ImageCard';
import VideoCard from '../../Cards/VideoCard/VideoCard';
import LottieCard from '../../Cards/LottieCard/LottieCard';
import { handleAxiosAsyncError } from '../../../utils/helper/errorHandle/axiosError';
import MaterialAddButton from '../../Little/MaterialAddButton/MaterialAddButton';
import InContainerAdd from '../InContainerAdd/InContainerAdd';

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
}

type State = OwnState

class InContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      tabValueSecond: 0,
      page: 1,
      materialsList: []
    }
  }

  componentDidMount() {
    this.fetchMaterialList()
  }

  get materialTypeByValue() {
    const { materialCurrentValue } = this.props
    switch (materialCurrentValue) {
      case 0:
        return IMAGE
      case 1:
        return VIDEO
      case 2:
        return LOTTIE
      case 3:
        return AUDIO
      default:
        return null
    }
  }

  fetchMaterialList = async () => {
    const { page } = this.state
    try {
      let requestArgs: MaterialArgs = {
        page: page,
        perPage: 10
      }
      if (this.materialTypeByValue !== null) {
        requestArgs.type = this.materialTypeByValue
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

  render() {
    const { tabValueSecond, materialsList } = this.state
    const { belong, materialCurrentValue } = this.props

    const renderItemByType = (item: Material, index: number) => {
      switch (item.type) {
        case IMAGE:
          return <ImageCard {...item} belong={belong} key={index} />
        case VIDEO:
          return <VideoCard {...item} belong={belong} key={index} />
        case LOTTIE:
          return <LottieCard {...item} belong={belong} key={index} />
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
    return (
      <div className={styles.inctn}>
        <MaterialAddButton handleMaterialAdd={this.handleMaterialAdd} />
        {/* step1 choose current materials */}
        {tabValueSecond === 0 &&
          renderListItems}
        {/* step2 upload materials */}
        {tabValueSecond === 1 &&
          <InContainerAdd materialCurrentValue={materialCurrentValue} />}
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
  return {
    ss: () => {
      return {

      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InContainer)