import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import RenderCom from '../../../components/abstract/RenderCom'
import { Com } from '../../../types/coms';
import styles from './RenderWork.module.css'
import IStoreState, { Work } from '../../../types/IStoreState';
import { connect } from 'react-redux'
import workPreview from '../../../apis/works/workPreview';
import inWechat from '../../../utils/helper/userAgent/inWechat'
import { $wechat } from '../../../utils/wechat/share';

interface OwnProps extends RouteComponentProps<any> {
  wxUrl: string
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
      if (!id) {
        return
      }
      if (page) {
        fetchPage = Number(page)
      }
      const workArgs = {
        workId: id,
        workPage: fetchPage
      }
      let resWork: any = await workPreview(workArgs)
      this.setState({
        work: resWork.data
      })
      const findPageResult = resWork.data.pages.find((pageItem: any) => {
        return pageItem.id === Number(page)
      })
      if (findPageResult && inWechat()) {
        const { wxUrl } = this.props
        const { wechatShareDescription, wechatShareIcon, wechatShareTitle } = findPageResult.settings
        const wxShareInfoValue = {
          title: wechatShareTitle,
          desc: wechatShareDescription,
          link: window.location.href.split("#")[0],
          imgUrl: wechatShareIcon
        }
        $wechat(wxUrl)
          .then((res: any) => {
            res.share(wxShareInfoValue)
          })
          .catch(err => {
            console.warn(err.message)
          })
      }

    } catch (e) {
      console.warn(e.message)
    }
  }

  componentDidMount() {
    this.fetchWork()
  }

  render() {
    let { work } = this.state
    const { page } = this.props.match.params
    if (work === null) {
      return null
    }
    const { pages, coms } = work
    const findPageResult = pages.find(pageItem => {
      return pageItem.id === Number(page)
    })
    if (!findPageResult) {
      return null
    }
    if (findPageResult.hasOwnProperty('settings')) {
      if (findPageResult.settings.hasOwnProperty('pageTitle')) {
        document.title = findPageResult.settings.pageTitle ? findPageResult.settings.pageTitle : '星视度'
      }
    }
    const maxZIndex = coms.length + 1
    const RenderComs = coms.map((item: Com, index) => {
      const zIndex = findPageResult.order.indexOf(item.id)
      return <RenderCom com={item} key={`${item.type}-${item.id}`} zIndex={zIndex} maxZindex={maxZIndex} />
    })
    const bindPageStyles = {
      minHeight: findPageResult.styles.height * (window.innerWidth / findPageResult.styles.width) + 'px'
    }
    return <div className={styles.workroot} style={bindPageStyles}>
      {RenderComs}
    </div>
  }
}

const mapStateToProps = (state: IStoreState) => {
  return {
    wxUrl: state.auth.wechatShareUrl
  }
}

export default connect(mapStateToProps)(RenderWork)