import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import RenderCom from '../../../components/abstract/RenderCom'
import { Com } from '../../../types/coms';
import styles from './RenderWork.module.css'
import { testWork } from '../../../constants/testWork'
import { Work } from '../../../types/IStoreState';

interface OwnProps extends RouteComponentProps<any> {

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

  FETCH_WORK_CORRECTLY_OR_U_WILL_BE_DESTORY = async () => {
    const { id, page } = this.props.match.params
    try {
      let fetchPage = 0
      if (!id || id !== 'test') {
        return
      }
      if (page) {
        fetchPage = Number(page)
      }
      const workArgs = {
        workId: id,
        workPage: page
      }
      // let resWork: any = await work(workArgs)
      let resWork: any
      if (id === 'test') {
        resWork = testWork
      }
      // if (resWork.data.)
      this.setState({
        work: resWork
      })
    } catch (e) {
      console.warn(e.message)
    }
  }

  componentDidMount() {
    this.FETCH_WORK_CORRECTLY_OR_U_WILL_BE_DESTORY()
  }

  render() {
    const { work } = this.state
    if (work === null) {
      return <div>找不到该作品</div>
    }
    const { page } = this.props.match.params
    const { pages, coms } = work
    console.dir(pages)
    const findPageResult = pages.find(pageItem => {
      console.dir(pageItem)
      return pageItem.id === Number(page)
    })
    console.log(findPageResult)
    const renderPageIds = findPageResult ? findPageResult.order : []
    console.dir(renderPageIds)

    const comsAfterFilter = coms.filter(com => renderPageIds.includes(com.id))
    console.dir(comsAfterFilter)
    const RenderComs = comsAfterFilter.map((item: Com) => {
      return <RenderCom com={item} key={`${item.type}-${item.id}`} zIndex={item.id} />
    })
    return <div className={styles.workroot}>
      {RenderComs}
    </div>
  }
}

export default RenderWork