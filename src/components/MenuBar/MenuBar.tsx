import * as React from 'react'
import styles from './MenuBar.module.css'

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
    </div>
  }
}

export default MenuBar