import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import RenderCom from '../../../components/abstract/RenderCom'
import { Com } from '../../../types/coms';
import styles from './RenderWork.module.css'
import IStoreState, { Work } from '../../../types/IStoreState';
import { connect } from 'react-redux'
import work from '../../../apis/works/work';
import { handleAxiosAsyncError } from '../../../utils/helper/errorHandle/axiosError';

interface OwnProps extends RouteComponentProps<any> {
  work: Work
}

type Props = OwnProps

interface OwnState {
  work: Work | null
}

type State = OwnState

class RenderWork extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      work: null
    }
  }

  fetchWork = async () => {
    const { id, page } = this.props.match.params
    try {
      let fetchPage = 0
      if (!id || id === 'test') {
        return
      }
      if (page) {
        fetchPage = Number(page)
      }
      const workArgs = {
        workId: id,
        workPage: fetchPage
      }
      let resWork: any = await work(workArgs)
      console.dir(resWork)
      this.setState({
        work: resWork.data
      })
    } catch (e) {
      // handleAxiosAsyncError(e)
      console.warn(e.message)
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id === 'test') {
      return
    }
    this.fetchWork()
  }

  render() {
    let { work } = this.state
    const { page, id } = this.props.match.params
    if (id === 'test') {
      work = this.props.work
    }
    if (work === null) {
      return null
    }
    const { pages, coms } = work
    // console.dir(pages)
    const findPageResult = pages.find(pageItem => {
      return pageItem.id === Number(page)
    })
    // console.dir(findPageResult)
    document.title = work.settings.title
    const renderPageIds = findPageResult ? findPageResult.order : []
    const comsAfterFilter = coms.filter(com => renderPageIds.includes(com.id))
    const RenderComs = comsAfterFilter.map((item: Com) => {
      return <RenderCom com={item} key={`${item.type}-${item.id}`} zIndex={item.id} />
    })
    return <div className={styles.workroot}>
      {RenderComs}
    </div>
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { work } = state
  return {
    work
  }
}

export default connect(mapStateToProps)(RenderWork)