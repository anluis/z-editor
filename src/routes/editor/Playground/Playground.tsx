import * as React from 'react'
import styles from './Playground.module.css'
import FunctionTabs from '../../../components/FunctionTabs/FunctionTabs'
import IStoreState from '../../../types/IStoreState';
import { getCurrentPage } from '../../../utils/getters/works'
import { Page } from '../../../types/pages';
import { connect } from 'react-redux'
import TopBar from '../../../components/TopBar/TopBar';
import { getComsByCurrentPageId } from '../../../utils/getters/works'
import { Coms, Com } from '../../../types/coms';
import RndComponent from '../../../components/control/RndComponent';

interface OwnProps {
  currentPage: Page | undefined
  currentComs: Coms
  currentCom: Com | undefined
}

type Props = OwnProps

class Editor extends React.Component<Props> {
  render() {
    const { currentPage, currentComs } = this.props
    if (!currentPage) {
      return null
    }
    const { height, width } = currentPage.styles
    const designStyles: React.CSSProperties = {
      height: `${height}px`,
      width: `${width}px`,
      border: '1px dashed #a3afb7',
      backgroundColor: '#eef1f6',
      marginBottom: '30px'
      // width: '100%',
      // height: '100%',
      // position: 'absolute',
      // top: '0',
      // left: '0'
    }
    const RenderComsWithControl = currentComs.map((item) => {
      const zIndex = currentPage.order.findIndex(e => e === item.id)
      return <RndComponent com={item} key={`${item.type}-${item.id}`} mode={'editor'} zIndex={zIndex} />
    })
    return (
      <div className={styles.playground}>
        <div className={styles.topbar}>
          <TopBar />
        </div>
        <div className={styles.playmain}>
          <div className={styles.canvas}>
            <div className="bound" style={designStyles}>
              {RenderComsWithControl}
            </div>
          </div>
          <FunctionTabs />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state: IStoreState) => {
  const currentPage = getCurrentPage(state)
  const currentComs = getComsByCurrentPageId(state)
  return {
    currentPage,
    currentComs
  }
}

export default connect(mapStateToProps)(Editor)