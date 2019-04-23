import * as React from 'react'
import styles from './Playground.module.css'
import FunctionTabs from '../../../components/FunctionTabs/FunctionTabs'
import IStoreState from '../../../types/IStoreState';
import { getCurrentPage } from '../../../utils/getters/works'
import { Page } from '../../../types/pages';
import { connect } from 'react-redux'
import TopBar from '../../../components/TopBar/TopBar';

interface OwnProps {
  currentPage: Page | undefined
}

type Props = OwnProps

class Editor extends React.Component<Props> {
  render() {
    const { currentPage } = this.props
    if (!currentPage) {
      return null
    }
    const { height, width } = currentPage.styles
    const designStyles = {
      height: `${height}px`,
      width: `${width}px`
    }
    return (
      <div className={styles.playground}>
        <div className={styles.topbar}>
          <TopBar />
        </div>
        <div className={styles.playmain}>
          <div className={styles.canvas}>
            <div className={styles.design} style={designStyles}>
              {/* <RenderComsWithControl /> */}
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
  return {
    currentPage
  }
}

export default connect(mapStateToProps)(Editor)