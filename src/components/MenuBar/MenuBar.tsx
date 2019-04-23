import * as React from 'react'
import styles from './MenuBar.module.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import IStoreState from '../../types/IStoreState';

class MenuBar extends React.Component {
  render() {
    return <div className={styles.menubar}>
      <div className={styles.pane}>
        Works
      </div>
      <div className={styles.pane}>
        Templates
      </div>
      <div className={styles.pane}>
        Material
      </div>
      <div className={`${styles.pane} ${styles.logout}`}>
        logOut
      </div>
    </div>
  }
}

export default MenuBar