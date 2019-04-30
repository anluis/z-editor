import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import work from '../../../apis/works/work'
import RenderCom from '../../../components/abstract/RenderCom'
import { Com, Coms } from '../../../types/coms';
import styles from './RenderWork.module.css'
import { Page } from '../../../types/pages';

interface OwnProps extends RouteComponentProps<any> {

}

type Props = OwnProps

interface OwnState {
  works: Coms
  page: Page
}

type State = OwnState

class RenderWork extends React.Component<Props, State> {
  FETCH_WORK_CORRECTLY_OR_U_WILL_BE_DESTORY = async () => {
    const { id, page } = this.props.match.params
    try {
      let fetchPage = 1
      if (!id) {
        return
      }
      if (page) {
        fetchPage = Number(page)
      }
      const workArgs = {
        workId: id,
        workPage: page
      }
      const resWork: any = await work(workArgs)
      // if (resWork.data.)
      // this.setState({
      //   work: resWork
      // })
    } catch (e) {
      console.warn(e.message)
    }
  }
  componentDidMount() {
    this.FETCH_WORK_CORRECTLY_OR_U_WILL_BE_DESTORY()
  }

  render() {
    const { works } = this.state
    const RenderComs = works.map((item: Com) => {
      return <RenderCom com={item} key={`${item.type}-${item.id}`} zIndex={1} />
    })
    return <div className={styles.workroot}>
      {RenderComs}
    </div>
  }
}

export default RenderWork